/** URL slug of a Journal topic: "Windows & doors" -> "windows-doors". Topic pages live at /journal/topic/<slug>.
 *  Kept in its own tiny file so system pages (main script) can link to topics without importing the Journal. */
export const topicSlug = (t: string): string =>
  t.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
