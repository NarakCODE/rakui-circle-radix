"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

import {
  defaultThemeStyle,
  isThemeStyle,
  themeStyleStorageKey,
  themeStyles,
  type ThemeStyle,
} from "@/lib/theme"

type ThemeStyleContextValue = {
  themeStyle: ThemeStyle
  setThemeStyle: (themeStyle: ThemeStyle) => void
}

const THEME_STYLE_EVENT = "theme-style-change"

const ThemeStyleContext = React.createContext<ThemeStyleContextValue | null>(
  null
)

function getStoredThemeStyle(storageKey: string, defaultThemeStyle: ThemeStyle) {
  if (typeof window === "undefined") {
    return defaultThemeStyle
  }

  const storedThemeStyle = window.localStorage.getItem(storageKey)
  return storedThemeStyle && isThemeStyle(storedThemeStyle)
    ? storedThemeStyle
    : defaultThemeStyle
}

function ThemeProvider({
  children,
  defaultThemeStyle: initialThemeStyle = defaultThemeStyle,
  themeStyleStorageKey: initialStorageKey = themeStyleStorageKey,
  ...props
}: React.ComponentProps<typeof NextThemesProvider> & {
  defaultThemeStyle?: ThemeStyle
  themeStyleStorageKey?: string
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeStyleProvider
        defaultThemeStyle={initialThemeStyle}
        storageKey={initialStorageKey}
      >
        <ThemeHotkey />
        {children}
      </ThemeStyleProvider>
    </NextThemesProvider>
  )
}

function ThemeStyleProvider({
  children,
  defaultThemeStyle,
  storageKey,
}: React.PropsWithChildren<{
  defaultThemeStyle: ThemeStyle
  storageKey: string
}>) {
  const themeStyle = React.useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange)
      window.addEventListener(THEME_STYLE_EVENT, onStoreChange)

      return () => {
        window.removeEventListener("storage", onStoreChange)
        window.removeEventListener(THEME_STYLE_EVENT, onStoreChange)
      }
    },
    () => getStoredThemeStyle(storageKey, defaultThemeStyle),
    () => defaultThemeStyle
  )

  const setThemeStyle = React.useCallback(
    (nextThemeStyle: ThemeStyle) => {
      document.documentElement.dataset.theme = nextThemeStyle
      window.localStorage.setItem(storageKey, nextThemeStyle)
      window.dispatchEvent(new Event(THEME_STYLE_EVENT))
    },
    [storageKey]
  )

  React.useEffect(() => {
    document.documentElement.dataset.theme = themeStyle
  }, [themeStyle])

  const value = React.useMemo(
    () => ({
      themeStyle,
      setThemeStyle,
    }),
    [setThemeStyle, themeStyle]
  )

  return (
    <ThemeStyleContext.Provider value={value}>
      {children}
    </ThemeStyleContext.Provider>
  )
}

function useThemeStyle() {
  const context = React.useContext(ThemeStyleContext)

  if (!context) {
    throw new Error("useThemeStyle must be used within ThemeProvider.")
  }

  return context
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export { ThemeProvider, themeStyles, useThemeStyle }
