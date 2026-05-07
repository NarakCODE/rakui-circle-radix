"use client"

import { CheckIcon, ChevronDownIcon } from "lucide-react"
import { LanguageCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { useLanguageSwitcher } from "@/hooks/use-language-switcher"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type LanguageSwitcherProps = {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { activeLocale, changeLanguage, isPending, languages } =
    useLanguageSwitcher()

  const activeLanguage = languages.find(
    (language) => language.locale === activeLocale
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={isPending}
          className={cn("h-9 gap-2 px-3", className)}
          aria-label="Switch language"
        >
          <HugeiconsIcon
            icon={LanguageCircleIcon}
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="hidden sm:inline">
            {activeLanguage?.nativeLabel ?? activeLocale}
          </span>

          <span className="sm:hidden">
            {activeLanguage?.shortLabel ?? activeLocale}
          </span>

          <ChevronDownIcon
            className="size-4 text-muted-foreground"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-40">
        {languages.map((language) => {
          const isActive = language.locale === activeLocale

          return (
            <DropdownMenuItem
              key={language.locale}
              disabled={isPending}
              onClick={() => {
                if (!isActive) {
                  changeLanguage(language.locale)
                }
              }}
              className="flex cursor-pointer items-center justify-between gap-3"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {language.nativeLabel}
                </span>
                <span className="text-xs text-muted-foreground">
                  {language.label}
                </span>
              </div>

              {isActive ? (
                <CheckIcon className="size-4 text-primary" aria-hidden="true" />
              ) : null}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
