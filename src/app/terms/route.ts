import html from "@/site/pages/terms";
import { htmlResponse } from "@/site/respond";

export const dynamic = "force-static";

export function GET() {
  return htmlResponse(html);
}
