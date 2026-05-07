"use client"

import * as React from "react"
import {
  usePathname,
  useRouter,
} from "next/navigation"

import {
  defaultLocale,
  isAppLocale,
  languageOptions,
  languageOptionsByLocale,
} from "@/config/language-config"
import { useMemoizedFn } from "@/hooks/use-memoized-fn"
import { getPathname } from "@/i18n/navigation"
import type { AppLocale } from "@/types/language-types"

function getQueryFromSearchParams(searchParams: URLSearchParams) {
  const query: Record<string, string | string[]> = {}

  for (const [key, value] of searchParams.entries()) {
    const currentValue = query[key]

    if (currentValue === undefined) {
      query[key] = value
      continue
    }

    if (Array.isArray(currentValue)) {
      currentValue.push(value)
      continue
    }

    query[key] = [currentValue, value]
  }

  return Object.keys(query).length > 0 ? query : undefined
}

function getLocaleFromPathname(pathname: string): AppLocale {
  const [, firstSegment] = pathname.split("/")

  return firstSegment && isAppLocale(firstSegment)
    ? firstSegment
    : defaultLocale
}

function getInternalPathname(pathname: string) {
  const segments = pathname.split("/")
  const [, firstSegment] = segments

  if (!firstSegment || !isAppLocale(firstSegment)) {
    return pathname
  }

  const nextPathname = `/${segments.slice(2).join("/")}`

  return nextPathname === "/" ? nextPathname : nextPathname.replace(/\/$/, "")
}

export function useLanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = React.useTransition()

  const activeLocale = getLocaleFromPathname(pathname)
  const activeLanguage = languageOptionsByLocale[activeLocale]
  const internalPathname = getInternalPathname(pathname)

  const changeLanguage = useMemoizedFn((nextLocale: AppLocale) => {
    if (nextLocale === activeLocale) {
      return
    }

    const query = getQueryFromSearchParams(
      new URLSearchParams(window.location.search)
    )
    const nextPathname = getPathname({
      href: query
        ? {
            pathname: internalPathname,
            query,
          }
        : internalPathname,
      locale: nextLocale,
    })

    startTransition(() => {
      router.replace(nextPathname, {
        scroll: false,
      })
    })
  })

  return {
    activeLanguage,
    activeLocale,
    changeLanguage,
    isPending,
    languages: languageOptions,
  }
}
