export function randomColor() {
  const r = Math.floor(Math.random() * (256 - 100 + 1) + 100);
  const g = Math.floor(Math.random() * (256 - 100 + 1) + 100);
  const b = Math.floor(Math.random() * (256 - 100 + 1) + 100);
  const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
