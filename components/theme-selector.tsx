"use client"

import * as React from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  MonitorIcon,
  MoonIcon,
  PaletteIcon,
  SunIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

import { useThemeStyle } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themeStyleOptions = [
  {
    value: "verdant",
    label: "Verdant",
    swatches: [
      "bg-[oklch(0.8871_0.2122_128.5041)]",
      "bg-[oklch(0.9819_0.0181_155.8263)]",
      "bg-[oklch(0.3717_0.0392_257.2870)]",
    ],
  },
  {
    value: "amethyst",
    label: "Amethyst",
    swatches: [
      "bg-[oklch(0.5144_0.1605_267.4400)]",
      "bg-[oklch(0.9214_0.0248_257.6500)]",
      "bg-[oklch(0.2571_0.1161_272.2400)]",
    ],
  },
] as const

const modeOptions = [
  {
    value: "light",
    label: "Light",
    icon: SunIcon,
  },
  {
    value: "dark",
    label: "Dark",
    icon: MoonIcon,
  },
  {
    value: "system",
    label: "System",
    icon: MonitorIcon,
  },
] as const

type ThemeSelectorProps = {
  className?: string
}

export function ThemeSelector({ className }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme()
  const { themeStyle, setThemeStyle } = useThemeStyle()

  const activeThemeStyle = themeStyleOptions.find(
    (option) => option.value === themeStyle
  )

  const activeMode = modeOptions.find(
    (option) => option.value === (theme ?? "system")
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={cn("h-9 gap-2 px-3", className)}
          aria-label="Open theme selector"
        >
          <PaletteIcon className="size-4" aria-hidden="true" />

          <span className="hidden sm:inline">
            {activeThemeStyle?.label ?? "Theme"}
          </span>

          <span className="hidden text-muted-foreground md:inline">/</span>

          <span className="hidden md:inline">
            {activeMode?.label ?? "System"}
          </span>

          <ChevronDownIcon
            className="size-4 text-muted-foreground"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel>Theme style</DropdownMenuLabel>

        {themeStyleOptions.map((option) => {
          const isActive = option.value === themeStyle

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setThemeStyle(option.value)}
              className="flex cursor-pointer items-center justify-between gap-3 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {option.swatches.map((swatch) => (
                    <span
                      key={swatch}
                      aria-hidden="true"
                      className={cn(
                        "size-3 rounded-full border border-black/10 shadow-xs",
                        swatch
                      )}
                    />
                  ))}
                </div>

                <span className="font-medium">{option.label}</span>
              </div>

              {isActive ? (
                <CheckIcon className="size-4 text-primary" aria-hidden="true" />
              ) : null}
            </DropdownMenuItem>
          )
        })}

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Mode</DropdownMenuLabel>

        {modeOptions.map((option) => {
          const Icon = option.icon
          const isActive = option.value === (theme ?? "system")

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="flex cursor-pointer items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <Icon
                  className="size-4 text-muted-foreground"
                  aria-hidden="true"
                />
                <span>{option.label}</span>
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
