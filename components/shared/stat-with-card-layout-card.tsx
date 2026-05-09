import type { ReactNode } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TrendType = "positive" | "negative" | "neutral"

export type StatWithCardLayoutItem = {
  name: string
  value: ReactNode
  change?: string
  changeType?: TrendType
}

type StatWithCardLayoutCardProps = {
  items: StatWithCardLayoutItem[]
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

export function StatWithCardLayoutCard({
  items,
  className,
  itemClassName,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-4",
}: StatWithCardLayoutCardProps) {
  return (
    <dl className={cn("grid grid-cols-1 gap-6", columnsClassName, className)}>
      {items.map((item) => (
        <Card key={item.name} className={cn(itemClassName)}>
          <CardContent>
            <dt className="text-sm font-medium text-muted-foreground">
              {item.name}
            </dt>

            <dd className="mt-2 flex items-baseline gap-2.5">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">
                {item.value}
              </span>

              {item.change ? (
                <span
                  className={cn(
                    "text-sm font-medium tabular-nums",
                    getTrendClassName(item.changeType)
                  )}
                >
                  {item.change}
                </span>
              ) : null}
            </dd>
          </CardContent>
        </Card>
      ))}
    </dl>
  )
}
