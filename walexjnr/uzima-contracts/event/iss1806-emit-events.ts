// Issue 1806: Add events for RentalYield state changes
// Simplification: emit-state-events helper for the rental-yield event stream.
export type RentalYieldEvent =
  | { type: "Deposit"; amount: number }
  | { type: "Withdraw"; amount: number }
  | { type: "Yield"; amount: number };

export function emitRentalYieldEvent(event: RentalYieldEvent): void {
  console.log("RentalYield event:", event);
}
