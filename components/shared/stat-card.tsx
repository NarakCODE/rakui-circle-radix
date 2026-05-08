// src/components/shared/stat-card.tsx

import type { CSSProperties, ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type StatCardDensity = "default" | "compact"

type StatCardProps = {
  title: string
  value?: ReactNode
  icon?: ReactNode
  headerAside?: ReactNode
  footer?: ReactNode
  density?: StatCardDensity
  valueClassName?: string
  className?: string
}

export function StatCard({
  title,
  value,
  icon,
  headerAside,
  footer,
  density = "default",
  valueClassName,
  className,
}: StatCardProps) {
  const outerPadding = density === "compact" ? "4px" : "6px"
  const innerRadius = `calc(var(--radius) - ${outerPadding})`

  const cardStyle = {
    borderRadius: "var(--radius)",
    padding: outerPadding,
  } satisfies CSSProperties

  return (
    <Card
      className={cn("gap-0 border bg-background shadow-none ring-0", className)}
      style={cardStyle}
    >
      <CardHeader
        className={cn("px-2 pt-1", density === "compact" ? "pb-1.5" : "pb-2")}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {icon ? <span className="shrink-0">{icon}</span> : null}

            <CardTitle>
              <span>{title}</span>
            </CardTitle>
          </div>

          {headerAside ? <div>{headerAside}</div> : null}
        </div>
      </CardHeader>

      <CardContent
        className={cn(
          "border border-border bg-card",
          density === "compact"
            ? "space-y-1.5 px-3 py-2.5"
            : "space-y-3 px-5 py-4"
        )}
        style={{ borderRadius: innerRadius }}
      >
        <div
          className={cn(
            density === "compact"
              ? "text-lg leading-6 font-medium text-foreground"
              : "text-3xl leading-8 font-medium text-foreground",
            valueClassName
          )}
        >
          {value}
        </div>
        {footer ? <div className="mt-2">{footer}</div> : null}
      </CardContent>
    </Card>
  )
}
