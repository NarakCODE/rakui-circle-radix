"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

const themeStyles = ["verdant", "amethyst"] as const

type ThemeStyle = (typeof themeStyles)[number]

type ThemeStyleContextValue = {
  themeStyle: ThemeStyle
  setThemeStyle: (themeStyle: ThemeStyle) => void
}

const ThemeStyleContext = React.createContext<ThemeStyleContextValue | null>(
  null
)

function ThemeProvider({
  children,
  defaultThemeStyle = "verdant",
  themeStyleStorageKey = "theme-style",
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
        defaultThemeStyle={defaultThemeStyle}
        storageKey={themeStyleStorageKey}
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
  const [themeStyle, setThemeStyle] = React.useState<ThemeStyle>(() => {
    if (typeof window === "undefined") {
      return defaultThemeStyle
    }

    const storedThemeStyle = window.localStorage.getItem(storageKey)
    return storedThemeStyle && isThemeStyle(storedThemeStyle)
      ? storedThemeStyle
      : defaultThemeStyle
  })

  React.useEffect(() => {
    document.documentElement.dataset.theme = themeStyle
    window.localStorage.setItem(storageKey, themeStyle)
  }, [storageKey, themeStyle])

  const value = React.useMemo(
    () => ({
      themeStyle,
      setThemeStyle,
    }),
    [themeStyle]
  )

  return (
    <ThemeStyleContext.Provider value={value}>
      {children}
    </ThemeStyleContext.Provider>
  )
}

function isThemeStyle(value: string): value is ThemeStyle {
  return themeStyles.includes(value as ThemeStyle)
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
