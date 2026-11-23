import html from "@/site/pages/advertisers";
import { htmlResponse } from "@/site/respond";

export const dynamic = "force-static";

export function GET() {
  return htmlResponse(html);
}
