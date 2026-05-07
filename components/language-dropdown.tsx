"use client"

import { LanguageCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { useLanguageSwitcher } from "@/hooks/use-language-switcher"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type LanguageDropdownProps = {
  className?: string
}

export function LanguageDropdown({
  className,
}: LanguageDropdownProps) {
  const { activeLanguage, activeLocale, changeLanguage, isPending, languages } =
    useLanguageSwitcher()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("min-w-24 justify-between", className)}
          aria-label="Open language menu"
          disabled={isPending}
        >
          <HugeiconsIcon
            icon={LanguageCircleIcon}
            size={16}
            strokeWidth={1.8}
            data-icon="inline-start"
            aria-hidden="true"
          />
          {activeLanguage.shortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={activeLocale}
          onValueChange={(value) =>
            changeLanguage(value as (typeof languages)[number]["locale"])
          }
        >
          {languages.map((language) => (
            <DropdownMenuRadioItem
              key={language.locale}
              value={language.locale}
              disabled={isPending}
              className="items-start gap-3 py-2"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-medium">{language.nativeLabel}</span>
                <span className="text-xs text-muted-foreground">
                  {language.label}
                </span>
              </div>
              <Badge variant="outline" className="ml-auto">
                {language.shortLabel}
              </Badge>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
