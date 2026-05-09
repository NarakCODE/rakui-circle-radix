import type { ReactNode } from "react"
import { ArrowDown02Icon, ArrowUp02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TrendType = "positive" | "negative" | "neutral"

export type StatWithBadgeItem = {
  name: string
  value: ReactNode
  change?: string
  changeType?: TrendType
}

type StatWithBadgeCardProps = {
  items: StatWithBadgeItem[]
  className?: string
  itemClassName?: string
  columnsClassName?: string
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

function TrendBadge({
  change,
  changeType = "neutral",
}: {
  change?: string
  changeType?: TrendType
}) {
  if (!change) return null

  const isPositive = changeType === "positive"
  const isNegative = changeType === "negative"

  return (
    <Badge
      variant="outline"
      className={cn("gap-1 tabular-nums", getTrendClassName(changeType))}
    >
      {isPositive ? (
        <HugeiconsIcon
          icon={ArrowUp02Icon}
          size={14}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ) : null}

      {isNegative ? (
        <HugeiconsIcon
          icon={ArrowDown02Icon}
          size={14}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ) : null}

      <span className="sr-only">
        {isPositive
          ? "Increased by"
          : isNegative
            ? "Decreased by"
            : "Changed by"}
      </span>

      {change}
    </Badge>
  )
}

export function StatWithBadgeCard({
  items,
  className,
  itemClassName,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
}: StatWithBadgeCardProps) {
  return (
    <dl className={cn("grid grid-cols-1 gap-6", columnsClassName, className)}>
      {items.map((item) => (
        <Card key={item.name} className={cn(itemClassName)}>
          <CardContent>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-sm font-medium text-muted-foreground">
                {item.name}
              </dt>

              <TrendBadge change={item.change} changeType={item.changeType} />
            </div>

            <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">
              {item.value}
            </dd>
          </CardContent>
        </Card>
      ))}
    </dl>
  )
}
