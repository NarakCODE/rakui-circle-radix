export const themeStyles = ["verdant", "amethyst"] as const

export type ThemeStyle = (typeof themeStyles)[number]

export const defaultThemeStyle: ThemeStyle = "verdant"

export const themeStyleStorageKey = "theme-style"

export function isThemeStyle(value: string): value is ThemeStyle {
  return themeStyles.includes(value as ThemeStyle)
}

export function getThemeStyleInitScript() {
  return `(() => {
    const defaultThemeStyle = ${JSON.stringify(defaultThemeStyle)};
    const storageKey = ${JSON.stringify(themeStyleStorageKey)};
    const themeStyles = ${JSON.stringify(themeStyles)};
    const storedThemeStyle = window.localStorage.getItem(storageKey);
    const themeStyle = storedThemeStyle && themeStyles.includes(storedThemeStyle)
      ? storedThemeStyle
      : defaultThemeStyle;

    document.documentElement.dataset.theme = themeStyle;
  })();`
}
