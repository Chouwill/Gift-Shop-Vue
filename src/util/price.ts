export default function cutAfterDot(value) {
  return String(value ?? "").replace(/\..*$/, "");
}
