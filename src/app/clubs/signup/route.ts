import html from "@/site/pages/signup";
import { htmlResponse } from "@/site/respond";

export const dynamic = "force-static";

export function GET() {
  return htmlResponse(html);
}
