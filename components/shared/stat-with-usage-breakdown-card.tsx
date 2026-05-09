import type { ReactNode } from "react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type StatUsageBreakdownItem = {
  label: string
  amount: ReactNode
  percentage: number
  className?: string
}

type StatWithUsageBreakdownCardProps = {
  title?: ReactNode
  value: ReactNode
  description?: ReactNode
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  breakdownTitle?: ReactNode
  items: StatUsageBreakdownItem[]
  footerText?: ReactNode
  footerHref?: string
  footerLinkLabel?: ReactNode
  className?: string
}

const defaultBreakdownClassNames = [
  "bg-[var(--chart-1)]",
  "bg-[var(--chart-2)]",
  "bg-[var(--chart-3)]",
]

function getChangeClassName(changeType: "positive" | "negative" | "neutral") {
  switch (changeType) {
    case "positive":
      return "text-primary"
    case "negative":
      return "text-destructive"
    default:
      return "text-muted-foreground"
  }
}

export function StatWithUsageBreakdownCard({
  title = "Usage",
  value,
  description = "this month",
  change,
  changeType = "neutral",
  breakdownTitle = "Resource breakdown",
  items,
  footerText = "Configure limits in",
  footerHref,
  footerLinkLabel = "resource settings.",
  className,
}: StatWithUsageBreakdownCardProps) {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">{title}</h3>

          {change ? (
            <Badge
              variant="secondary"
              className={cn("tabular-nums", getChangeClassName(changeType))}
            >
              {change}
            </Badge>
          ) : null}
        </div>

        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-medium tabular-nums">{value}</span>
          {description ? (
            <span className="text-sm text-muted-foreground">{description}</span>
          ) : null}
        </p>

        <div className="mt-4">
          <p className="text-sm font-medium">{breakdownTitle}</p>

          <div className="mt-2 flex items-center gap-0.5">
            {items.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "h-1.5",
                  item.className ?? defaultBreakdownClassNames[index]
                )}
                style={{ width: `${item.percentage}%` }}
              />
            ))}
          </div>
        </div>

        <ul className="mt-5 space-y-2">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2 text-xs">
              <span
                className={cn(
                  "size-2.5",
                  item.className ?? defaultBreakdownClassNames[index]
                )}
                aria-hidden="true"
              />
              <span>{item.label}</span>
              <span className="text-muted-foreground">
                ({item.amount} / {item.percentage}%)
              </span>
            </li>
          ))}
        </ul>

        {footerHref ? (
          <p className="mt-6 text-xs text-muted-foreground">
            {footerText}{" "}
            <Link href={footerHref} className="text-primary hover:underline">
              {footerLinkLabel}
            </Link>
          </p>
        ) : null}
      </CardContent>
    </Card>
  )
}
