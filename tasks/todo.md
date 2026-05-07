# Task Checklist

- [x] Inspect the current sidebar collapse behavior and identify the lock-up cause
- [x] Update the sidebar collapsible logic so active sections can still be manually collapsed
- [x] Verify the sidebar code compiles cleanly after the fix

# Results

- Replaced the controlled `open={isActive}` pattern in [components/nav-main.tsx](/E:/don-toanchetpay/rakui-circle-radix/components/nav-main.tsx:91) with `defaultOpen={isActive}`.
- Added a pathname-based remount key so the correct section still auto-expands when the route changes, without preventing manual collapse.
- Verified with `npm run typecheck`.
- Verified with `npx eslint components/nav-main.tsx`.
