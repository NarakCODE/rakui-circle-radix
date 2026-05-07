"use client"

import { LanguageCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { useLanguageSwitcher } from "@/hooks/use-language-switcher"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type LanguageSelectProps = {
  className?: string
}

export function LanguageSelect({
  className,
}: LanguageSelectProps) {
  const { activeLocale, changeLanguage, isPending, languages } =
    useLanguageSwitcher()

  return (
    <Select
      value={activeLocale}
      onValueChange={(value) =>
        changeLanguage(value as (typeof languages)[number]["locale"])
      }
      disabled={isPending}
    >
      <SelectTrigger
        className={cn("min-w-36", className)}
        aria-label="Select language"
      >
        <HugeiconsIcon
          icon={LanguageCircleIcon}
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {languages.map((language) => (
            <SelectItem key={language.locale} value={language.locale}>
              <span className="flex items-center gap-2">
                <span className="font-medium">{language.nativeLabel}</span>
                <Badge variant="outline">
                  {language.shortLabel}
                </Badge>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
