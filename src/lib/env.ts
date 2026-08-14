/**
 * The Flagrr app's own backend — where the club/admin account actually gets
 * created and where the Payfast merchant account lives. This marketing site
 * never touches Payfast credentials or a database directly: it calls this
 * backend's `initiateSignup` endpoint, then hands the browser off to Payfast.
 */
export const APP_URL = (process.env.FLAGRR_APP_URL || "https://flagrr-loyalty.vercel.app").replace(/\/+$/, "");

/**
 * This site's own public URL, used to build the Payfast return/cancel
 * redirect targets. Must be a real `https://` URL in any environment where
 * a signup should actually complete — the app backend rejects non-https
 * return/cancel URLs outright, and Payfast itself requires https.
 */
export const SITE_URL = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
