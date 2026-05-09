"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Cell, Pie, PieChart } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

export type StatUsageDashboardItem = {
  name: string
  current: ReactNode
  limit: ReactNode
  percentage: number
  href?: string
}

type StatUsageDashboardCardProps = {
  title?: ReactNode
  description?: ReactNode
  actionLabel?: ReactNode
  onActionClick?: () => void
  items: StatUsageDashboardItem[]
  className?: string
  itemClassName?: string
}

const chartConfig = {
  used: {
    label: "Used",
    color: "var(--primary)",
  },
  remaining: {
    label: "Remaining",
    color: "var(--muted)",
  },
} satisfies ChartConfig

function UsageDonutChart({ percentage }: { percentage: number }) {
  const value = Math.max(0, Math.min(100, Number(percentage)))

  const chartData = [
    {
      name: "used",
      value,
      fill: "var(--color-used)",
    },
    {
      name: "remaining",
      value: 100 - value,
      fill: "var(--color-remaining)",
    },
  ]

  return (
    <ChartContainer config={chartConfig} className="size-6 shrink-0">
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius={6}
          outerRadius={10}
          startAngle={90}
          endAngle={-270}
          strokeWidth={0}
          isAnimationActive={false}
        >
          {chartData.map((item) => (
            <Cell key={item.name} fill={item.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

function UsageRow({
  item,
  className,
}: {
  item: StatUsageDashboardItem
  className?: string
}) {
  const content = (
    <>
      <UsageDonutChart percentage={item.percentage} />

      <span className="flex-1 truncate text-sm">{item.name}</span>

      <span className="text-xs font-medium text-muted-foreground tabular-nums">
        {item.current} / <span className="text-foreground">{item.limit}</span>
      </span>
    </>
  )

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 px-2 py-2 hover:bg-muted/50",
          className
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-2 py-2 hover:bg-muted/50",
        className
      )}
    >
      {content}
    </div>
  )
}

export function StatUsageDashboardCard({
  title = "Last 30 days",
  description = "Updated just now",
  actionLabel = "Upgrade",
  onActionClick,
  items,
  className,
  itemClassName,
}: StatUsageDashboardCardProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium">{title}</h3>
            {description ? (
              <p className="text-xs font-medium text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>

          {actionLabel ? (
            <Button size="sm" onClick={onActionClick}>
              {actionLabel}
            </Button>
          ) : null}
        </div>
      </CardHeader>

      <CardContent>
        <div>
          {items.map((item) => (
            <UsageRow key={item.name} item={item} className={itemClassName} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
