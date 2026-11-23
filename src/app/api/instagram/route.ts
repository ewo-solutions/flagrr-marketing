import { NextResponse } from "next/server";

/**
 * The homepage "On Instagram" strip. Returns the latest @flagrrgolf posts as
 * { posts: [{ id, permalink, image, caption, type, timestamp }] } so every new
 * post shows on the site on its own, with no code change.
 *
 * Two ways to feed it. Set ONE on this site's Vercel project:
 *
 * 1. INSTAGRAM_ACCESS_TOKEN — a long-lived token from the Instagram API with
 *    Instagram Login (a Meta app with the instagram_business_basic permission,
 *    signed in as the @flagrrgolf professional account). The route reads
 *    /me/media directly and asks Instagram to extend the token once a day,
 *    because long-lived tokens lapse after 60 days without a refresh.
 *
 * 2. INSTAGRAM_FEED_URL — a JSON feed URL from a hosted Instagram feed service
 *    (for example Behold). The service holds the Instagram connection and its
 *    token renewals, so nothing here needs maintaining. Used first when set.
 *
 * With neither set, the @flagrrgolf Behold JSON feed below is used. That
 * feed URL is public (it is the same URL a Behold widget loads in the
 * browser), so it lives in code rather than in Vercel settings.
 *
 * Behold's free plan counts each feed load against a monthly allowance, so
 * Behold responses are cached for an hour; direct Instagram calls for 15
 * minutes. If Instagram or the feed errors, the route answers 503 and the
 * pages keep the posts they were built with.
 */

export interface FeedPost {
  id: string;
  permalink: string;
  image: string;
  caption: string;
  alt?: string;
  type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp?: string;
}

const REVALIDATE_SECONDS = 900;
const FEED_REVALIDATE_SECONDS = 3600;
const DEFAULT_FEED_URL = "https://feeds.behold.so/xA98yxsJov4YEtRjsdHb";
const LIMIT = 12;
const TIMEOUT_MS = 8000;
const GRAPH = "https://graph.instagram.com";

const str = (v: unknown) => (typeof v === "string" ? v : "");
const kind = (v: unknown): FeedPost["type"] =>
  v === "VIDEO" || v === "CAROUSEL_ALBUM" ? v : "IMAGE";
const isHttps = (u: string) => /^https:\/\//.test(u);

async function getJson(url: string, revalidate: number): Promise<unknown> {
  const res = await fetch(url, {
    next: { revalidate },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Instagram feed answered ${res.status}`);
  return res.json();
}

/** Instagram API with Instagram Login: /me/media with a long-lived token. */
async function fromGraph(token: string): Promise<FeedPost[]> {
  // Keep the token alive: refreshing is allowed once it is a day old, and the
  // daily cache below means Instagram is asked at most once a day.
  let live = token;
  try {
    const r = (await getJson(
      `${GRAPH}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`,
      86400,
    )) as { access_token?: string };
    if (r.access_token) live = r.access_token;
  } catch {
    // A refresh can fail for a token under a day old; the current one still works.
  }
  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const d = (await getJson(
    `${GRAPH}/me/media?fields=${fields}&limit=${LIMIT}&access_token=${encodeURIComponent(live)}`,
    REVALIDATE_SECONDS,
  )) as { data?: Record<string, unknown>[] };
  return (d.data || []).map((p) => {
    const type = kind(p.media_type);
    return {
      id: str(p.id),
      permalink: str(p.permalink),
      image: type === "VIDEO" ? str(p.thumbnail_url) : str(p.media_url),
      caption: str(p.caption),
      type,
      timestamp: str(p.timestamp) || undefined,
    };
  });
}

/** A hosted feed service's JSON (Behold's shape, with loose fallbacks). */
async function fromFeedUrl(url: string): Promise<FeedPost[]> {
  const d = (await getJson(url, FEED_REVALIDATE_SECONDS)) as unknown;
  const list = (Array.isArray(d) ? d : ((d as { posts?: unknown[] })?.posts ?? [])) as Record<string, unknown>[];
  return list.map((p) => {
    const sizes = (p.sizes || {}) as Record<string, { mediaUrl?: string }>;
    const type = kind(p.mediaType ?? p.media_type);
    const image =
      sizes.medium?.mediaUrl ||
      sizes.large?.mediaUrl ||
      str(p.thumbnailUrl ?? p.thumbnail_url) ||
      str(p.mediaUrl ?? p.media_url);
    return {
      id: str(p.id),
      permalink: str(p.permalink),
      image,
      caption: str(p.prunedCaption ?? p.caption),
      alt: str(p.altText) || undefined,
      type,
      timestamp: str(p.timestamp) || undefined,
    };
  });
}

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const feedUrl = process.env.INSTAGRAM_FEED_URL?.trim() || (token ? "" : DEFAULT_FEED_URL);
  try {
    const raw = feedUrl ? await fromFeedUrl(feedUrl) : await fromGraph(token as string);
    const posts = raw
      .filter((p) => p.id && isHttps(p.permalink) && isHttps(p.image))
      .map((p) => ({ ...p, caption: p.caption.slice(0, 600), alt: p.alt?.slice(0, 300) }))
      .slice(0, LIMIT);
    return NextResponse.json(
      { posts },
      { headers: { "Cache-Control": `public, s-maxage=${feedUrl ? FEED_REVALIDATE_SECONDS : REVALIDATE_SECONDS}, stale-while-revalidate=86400` } },
    );
  } catch (err) {
    console.error("[instagram] feed failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ posts: [], error: "Instagram feed unavailable" }, { status: 503 });
  }
}
