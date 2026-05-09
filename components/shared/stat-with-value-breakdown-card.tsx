import type { ReactNode } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TrendType = "positive" | "negative" | "neutral"

export type StatValueBreakdownItem = {
  label: ReactNode
  value: ReactNode
  percentage?: string
  percentageType?: TrendType
}

type StatWithValueBreakdownCardProps = {
  title?: ReactNode
  items: StatValueBreakdownItem[]
  className?: string
}

function getPercentageClassName(type: TrendType = "positive") {
  switch (type) {
    case "positive":
      return "bg-primary/10 text-primary"
    case "negative":
      return "bg-destructive/10 text-destructive"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function StatWithValueBreakdownCard({
  title = "Investment growth projection",
  items,
  className,
}: StatWithValueBreakdownCardProps) {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <h3 className="text-sm font-medium">{title}</h3>

        <ul className="mt-2 divide-y text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-3">
              <span className="text-muted-foreground">{item.label}</span>

              <span className="flex items-center gap-3 tabular-nums">
                <span className="text-right font-medium">{item.value}</span>

                {item.percentage ? (
                  <>
                    <span className="h-5 w-px bg-border" aria-hidden="true" />
                    <span
                      className={cn(
                        "min-w-14 px-1.5 py-1 text-center text-xs font-medium",
                        getPercentageClassName(item.percentageType)
                      )}
                    >
                      {item.percentage}
                    </span>
                  </>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
