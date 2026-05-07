import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

import { defaultLocale, locales } from "@/config/language-config"

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
})

export const {
  Link,
  getPathname,
  permanentRedirect,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing)
