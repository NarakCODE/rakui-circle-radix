# Task Checklist

- [x] Inspect the current analytics page and shared `StatCard` API
- [x] Integrate `StatCard` into the analytics page with a consistent responsive layout
- [x] Verify the affected analytics files and record the result

# Results

- Rebuilt `app/dashboard/analytics/page.tsx` around the shared `StatCard` component instead of rendering an incomplete `StatCard` call with missing props.
- The analytics page now uses `StatCard` for the key metrics (`Earnings`, `Expenses`, `Weekly Sales`, and `Purchase Orders`) inside a responsive dashboard layout, alongside the existing illustration.
- Verified with targeted `pnpm exec eslint app/dashboard/analytics/page.tsx components/shared/stat-card.tsx`.
