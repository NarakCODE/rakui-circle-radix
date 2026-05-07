"use client"

import * as React from "react"
import { MonitorIcon, MoonIcon, PaletteIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { useThemeStyle } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themeStyleOptions = [
  {
    value: "verdant",
    label: "Verdant",
    swatches: ["bg-[oklch(0.8871_0.2122_128.5041)]", "bg-[oklch(0.9819_0.0181_155.8263)]", "bg-[oklch(0.3717_0.0392_257.2870)]"],
  },
  {
    value: "amethyst",
    label: "Amethyst",
    swatches: ["bg-[oklch(0.5144_0.1605_267.4400)]", "bg-[oklch(0.9214_0.0248_257.6500)]", "bg-[oklch(0.2571_0.1161_272.2400)]"],
  },
] as const

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const { themeStyle, setThemeStyle } = useThemeStyle()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2"
          aria-label="Open theme selector"
        >
          <PaletteIcon className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 min-w-72">
        <DropdownMenuLabel>Theme style</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={themeStyle}
          onValueChange={(value) =>
            setThemeStyle(value as (typeof themeStyleOptions)[number]["value"])
          }
        >
          {themeStyleOptions.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              className="items-start gap-3 py-2"
            >
              <div className="mt-0.5 flex items-center gap-1.5">
                {option.swatches.map((swatch) => (
                  <span
                    key={swatch}
                    aria-hidden="true"
                    className={`size-3 rounded-full border border-black/10 shadow-xs ${swatch}`}
                  />
                ))}
              </div>
              <div className="font-medium">{option.label}</div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Mode</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={theme ?? "system"}
          onValueChange={(value) => setTheme(value)}
        >
          <DropdownMenuRadioItem value="light" className="gap-2">
            <SunIcon className="size-4" aria-hidden="true" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" className="gap-2">
            <MoonIcon className="size-4" aria-hidden="true" />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" className="gap-2">
            <MonitorIcon className="size-4" aria-hidden="true" />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
