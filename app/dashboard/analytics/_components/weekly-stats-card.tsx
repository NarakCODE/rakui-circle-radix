"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Comment01Icon,
  DashboardSquare01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const weeklyStatsData = [
  { day: "Mon", sales: 24 },
  { day: "Tue", sales: 32 },
  { day: "Wed", sales: 68 },
  { day: "Thu", sales: 22 },
  { day: "Fri", sales: 50 },
  { day: "Sat", sales: 24 },
  { day: "Sun", sales: 38 },
]

const chartConfig = {
  sales: {
    label: "Average sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const weeklyStats = [
  {
    title: "Top Sales",
    description: "Jonathan Doe",
    value: "+68",
    positive: true,
    icon: DashboardSquare01Icon,
  },
  {
    title: "Best Seller",
    description: "Footware",
    value: "+12",
    positive: true,
    icon: StarIcon,
  },
  {
    title: "Most Commented",
    description: "Fashionware",
    value: "-36",
    positive: false,
    icon: Comment01Icon,
  },
]

type WeeklyStatItemProps = {
  title: string
  description: string
  value: string
  positive?: boolean
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
}

function WeeklyStatItem({
  title,
  description,
  value,
  positive = true,
  icon,
}: WeeklyStatItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border text-muted-foreground">
        <HugeiconsIcon
          icon={icon}
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{description}</p>
      </div>

      <span
        className={cn(
          "rounded-full px-2 py-0.5 text-xs font-medium",
          positive
            ? "bg-teal-500/10 text-teal-500"
            : "bg-red-500/10 text-red-500"
        )}
      >
        {value}
      </span>
    </div>
  )
}

type WeeklyStatsCardProps = {
  className?: string
}

export function WeeklyStatsCard({ className }: WeeklyStatsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>Weekly Stats</CardTitle>
        <CardDescription>Average sales</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <ChartContainer config={chartConfig} className="h-37.5 w-full">
          <AreaChart
            accessibilityLayer
            data={weeklyStatsData}
            margin={{
              top: 8,
              right: 8,
              left: 8,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" hide tickLine={false} axisLine={false} />
            <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Area
              dataKey="sales"
              type="natural"
              fill="var(--color-sales)"
              fillOpacity={0.2}
              stroke="var(--color-sales)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>

        <div className="space-y-4">
          {weeklyStats.map((item) => (
            <WeeklyStatItem key={item.title} {...item} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
