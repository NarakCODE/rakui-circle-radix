"use client"

import { Cell, Pie, PieChart } from "recharts"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

type MonthlyEarningItem = {
  month: string
  current: string
  target: string
  percentage: number
}

const monthlyEarningsData: MonthlyEarningItem[] = [
  { month: "January", current: "$12.8K", target: "$20K", percentage: 64 },
  { month: "February", current: "$18.4K", target: "$25K", percentage: 73.6 },
  { month: "March", current: "$15.2K", target: "$22K", percentage: 69.1 },
  { month: "April", current: "$22.6K", target: "$30K", percentage: 75.3 },
  { month: "May", current: "$19.8K", target: "$25K", percentage: 79.2 },
  { month: "June", current: "$24.8K", target: "$30K", percentage: 82.7 },
  { month: "July", current: "$21.5K", target: "$28K", percentage: 76.8 },
  { month: "August", current: "$17.9K", target: "$25K", percentage: 71.6 },
  { month: "September", current: "$20.4K", target: "$28K", percentage: 72.9 },
  { month: "October", current: "$26.8K", target: "$32K", percentage: 83.8 },
]

const chartConfig = {
  earned: {
    label: "Earned",
    color: "var(--chart-1)",
  },
  remaining: {
    label: "Remaining",
    color: "var(--muted)",
  },
} satisfies ChartConfig

function DonutChart({ percentage }: { percentage: number }) {
  const value = Math.max(0, Math.min(100, percentage))

  const chartData = [
    {
      name: "earned",
      value,
      fill: "var(--color-earned)",
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

type MonthlyEarningsCardProps = {
  className?: string
}

export function MonthlyEarningsCard({ className }: MonthlyEarningsCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-medium">Monthly earnings</h3>
            <p className="text-sm text-muted-foreground">Updated just now</p>
          </div>

          <Button size="sm">View</Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-1">
          {monthlyEarningsData.map((item) => (
            <div
              key={item.month}
              className="flex items-center gap-3 px-2 py-2 hover:bg-muted/50"
            >
              <DonutChart percentage={item.percentage} />

              <span className="flex-1 truncate text-sm">{item.month}</span>

              <span className="text-xs font-medium text-muted-foreground tabular-nums">
                {item.current} /{" "}
                <span className="text-foreground">{item.target}</span>
              </span>
            </div>
          ))}
        </div>

        <Button variant="outline" className="mt-4 w-full gap-2">
          View earnings report
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Button>
      </CardContent>
    </Card>
  )
}
