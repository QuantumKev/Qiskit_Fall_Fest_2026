export function slugify(value: string) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}
