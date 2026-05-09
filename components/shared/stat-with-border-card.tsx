import type { ReactNode } from "react"
import { ArrowDown02Icon, ArrowUp02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TrendType = "up" | "down" | "neutral"

export type StatWithBorderItem = {
  metric: string
  current: ReactNode
  previous?: ReactNode
  difference?: string
  trend?: TrendType
}

type StatWithBorderCardProps = {
  items: StatWithBorderItem[]
  className?: string
  columnsClassName?: string
}

function getTrendClassName(trend: TrendType = "neutral") {
  switch (trend) {
    case "up":
      return "text-primary"
    case "down":
      return "text-destructive"
    default:
      return "text-muted-foreground"
  }
}

function TrendBadge({
  trend = "neutral",
  difference,
}: {
  trend?: TrendType
  difference?: string
}) {
  if (!difference) return null

  const isUp = trend === "up"
  const isDown = trend === "down"

  return (
    <Badge
      variant="outline"
      className={cn("gap-1 tabular-nums", getTrendClassName(trend))}
    >
      {isUp ? (
        <HugeiconsIcon
          icon={ArrowUp02Icon}
          size={14}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ) : null}

      {isDown ? (
        <HugeiconsIcon
          icon={ArrowDown02Icon}
          size={14}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ) : null}

      <span className="sr-only">
        {isUp ? "Increased by" : isDown ? "Decreased by" : "Changed by"}
      </span>

      {difference}
    </Badge>
  )
}

export function StatWithBorderCard({
  items,
  className,
  columnsClassName = "md:grid-cols-3",
}: StatWithBorderCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent
        className={cn(
          "grid divide-y p-0 md:divide-x md:divide-y-0",
          columnsClassName
        )}
      >
        {items.map((item) => (
          <div key={item.metric} className="p-4 sm:p-6">
            <CardTitle className="text-base font-normal">
              {item.metric}
            </CardTitle>

            <div className="mt-2 flex flex-wrap items-baseline gap-2">
              <div className="flex items-baseline text-2xl font-semibold text-primary tabular-nums">
                {item.current}

                {item.previous ? (
                  <span className="ml-2 text-sm font-medium text-muted-foreground tabular-nums">
                    from {item.previous}
                  </span>
                ) : null}
              </div>

              <TrendBadge trend={item.trend} difference={item.difference} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
