export function css(obj: Record<string, string>) {
  return Object.keys(obj)
    .map((k) => `${k}: ${obj[k]}`)
    .join(';');
}
