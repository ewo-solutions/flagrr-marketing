/**
 * Rounds and formats a number with a space thousands separator, en-ZA style.
 * Deliberately avoids `Intl`/`toLocaleString`: their thousands-separator
 * character can differ between Node's ICU build and the browser's, which
 * causes a server/client text mismatch on hydration.
 */
export function fmt(n: number): string {
  const sign = n < 0 ? "-" : "";
  const digits = String(Math.round(Math.abs(n)));
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return sign + grouped;
}
