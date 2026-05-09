# Task Checklist

- [x] Inspect `app/apps/ai/chat/page.tsx` and nearby route imports
- [x] Fix the AI chat page route export and local shadcn composition issue
- [x] Verify the AI chat route and record results

# Results

- Confirmed `app/apps/ai/chat/page.tsx` was missing the required default export, which broke Next page validation and the localized route import in `app/[locale]/[[...slug]]/page.tsx`.
- Changed `AppsAiChatPage` to the default export and wrapped its chat UI with `SidebarPageShell` so it behaves like the other app pages.
- Wrapped model `SelectItem` entries in `SelectGroup` to match the local select composition pattern.
- Verified with `pnpm exec eslint app/apps/ai/chat/page.tsx`.
- Verified with `pnpm exec tsc --noEmit 2>&1 | Select-String "app/apps/ai/chat|apps/ai/chat|AppsAiChatPage"`; it returned no matching errors for the AI chat route.
