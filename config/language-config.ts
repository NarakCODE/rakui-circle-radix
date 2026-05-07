import type { AppLocale, LanguageOption } from "@/types/language-types"

export const locales = ["en", "zh", "km"] as const

export const defaultLocale: AppLocale = "en"

export const languageOptions = [
  {
    locale: "en",
    label: "English",
    nativeLabel: "English",
    shortLabel: "EN",
  },
  {
    locale: "zh",
    label: "Chinese",
    nativeLabel: "中文",
    shortLabel: "ZH",
  },
  {
    locale: "km",
    label: "Khmer",
    nativeLabel: "ភាសាខ្មែរ",
    shortLabel: "KM",
  },
] as const satisfies readonly LanguageOption[]

export const languageOptionsByLocale = Object.fromEntries(
  languageOptions.map((language) => [language.locale, language])
) as Record<AppLocale, LanguageOption>

export function isAppLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale)
}
