// Issue 1813: Guard RentalYield against integer overflow
// Simplification: overflow guard helper for rental-yield math.
export function guardedAdd(a: unknown, b: unknown): number {
  const ia = Number(a);
  const ib = Number(b);
  if (!Number.isFinite(ia) || !Number.isFinite(ib)) return 0;
  const total = ia + ib;
  if (!Number.isFinite(total) || total < 0) return 0;
  return total;
}
