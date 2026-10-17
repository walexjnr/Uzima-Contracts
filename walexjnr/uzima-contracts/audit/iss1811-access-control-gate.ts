// Issue 1811: Audit access control in RentalYield
// Simplification: single audit-gate assertion helper.
export function assertRentalYieldAccess(caller: string, admins: readonly string[]): void {
  if (admins.includes(caller)) return;
  throw new Error("Access denied: caller is not an authorized admin");
}
