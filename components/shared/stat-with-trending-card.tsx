import type { ReactNode } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TrendType = "positive" | "negative" | "neutral"

export type StatWithTrendingItem = {
  name: string
  value: ReactNode
  change?: string
  changeType?: TrendType
}

type StatWithTrendingCardProps = {
  items: StatWithTrendingItem[]
  className?: string
  itemClassName?: string
}

function getTrendClassName(changeType: TrendType = "neutral") {
  switch (changeType) {
    case "positive":
      return "text-primary"
    case "negative":
      return "text-destructive"
    default:
      return "text-muted-foreground"
  }
}

export function StatWithTrendingCard({
  items,
  className,
  itemClassName,
}: StatWithTrendingCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="grid p-0 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              "border-border p-4 sm:p-6",
              index !== items.length - 1 &&
                "border-b sm:border-r lg:border-b-0",
              index === 1 && "sm:border-r-0 lg:border-r",
              itemClassName
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                {item.name}
              </p>

              {item.change ? (
                <p
                  className={cn(
                    "text-xs font-medium tabular-nums",
                    getTrendClassName(item.changeType)
                  )}
                >
                  {item.change}
                </p>
              ) : null}

              <p className="w-full flex-none text-3xl font-medium tracking-tight tabular-nums">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
