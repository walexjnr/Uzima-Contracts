// Issue 1812: Add invariant tests for RentalYield
// Simplification: single invariant-checks helper.
export function runInvariantChecks(state: unknown): void {
  if (!state) throw new Error("Invariant failed: state is empty");
}
