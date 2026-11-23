/** Serves one of the designed static pages as a full HTML document. */
export function htmlResponse(html: string) {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
