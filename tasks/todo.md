# Task Checklist

- [x] Confirm the source of the `negative` prop error in recent transactions
- [x] Fix the transaction item typing with the smallest safe change
- [x] Verify the updated recent transactions file and record the result

# Results

- Confirmed the TypeScript error came from `recentTransactions` being inferred as a union of object literals where most items did not have a `negative` property, so `transaction.negative` was not safe to access at the map site.
- Fixed `app/dashboard/analytics/_components/recent-transactions-card.tsx` by explicitly typing the `recentTransactions` array as `RecentTransactionItemProps[]`, which gives every item the same optional `negative` field shape.
- Removed an unused `DropdownMenuSeparator` import while updating the file.
- Verified with `pnpm exec eslint app/dashboard/analytics/_components/recent-transactions-card.tsx`.
- Re-ran `pnpm exec tsc --noEmit 2>&1 | Select-String "recent-transactions-card|negative"` and it returned no matching errors for this file after the fix.
