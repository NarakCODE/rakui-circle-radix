"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ArrowRight02Icon,
  DashboardSquare01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type RevenueChartItem = {
  date: string
  earnings: number
  expense: number
  profit: number
  refunds: number
}

const revenueChartData: RevenueChartItem[] = [
  { date: "01/08", earnings: 1.2, expense: 0.7, profit: 0.5, refunds: 0.1 },
  { date: "02/08", earnings: 1.8, expense: 1.1, profit: 0.7, refunds: 0.2 },
  { date: "03/08", earnings: 2.4, expense: 1.3, profit: 1.1, refunds: 0.2 },
  { date: "04/08", earnings: 1.6, expense: 0.9, profit: 0.7, refunds: 0.1 },
  { date: "05/08", earnings: 2.9, expense: 1.8, profit: 1.1, refunds: 0.3 },
  { date: "06/08", earnings: 2.2, expense: 1.4, profit: 0.8, refunds: 0.2 },
  { date: "07/08", earnings: 3.1, expense: 1.6, profit: 1.5, refunds: 0.2 },
  { date: "08/08", earnings: 2.7, expense: 1.2, profit: 1.5, refunds: 0.1 },
  { date: "09/08", earnings: 1.9, expense: 1.5, profit: 0.4, refunds: 0.2 },
  { date: "10/08", earnings: 3.4, expense: 2.0, profit: 1.4, refunds: 0.3 },
  { date: "11/08", earnings: 2.8, expense: 1.7, profit: 1.1, refunds: 0.2 },
  { date: "12/08", earnings: 3.6, expense: 2.1, profit: 1.5, refunds: 0.3 },
  { date: "13/08", earnings: 2.5, expense: 1.3, profit: 1.2, refunds: 0.1 },
]

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "var(--chart-1)",
  },
  expense: {
    label: "Expense",
    color: "var(--chart-2)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-3)",
  },
  refunds: {
    label: "Refunds",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

const yearOptions = ["2026", "2025"]

type RevenueSummaryItemProps = {
  label: string
  value: string
  dotClassName?: string
}

type YearOption = (typeof yearOptions)[number]

function RevenueSummaryItem({
  label,
  value,
  dotClassName = "bg-primary",
}: RevenueSummaryItemProps) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2 text-muted-foreground">
        <span className={`size-2 rounded-full ${dotClassName}`} />
        <span className="text-sm">{label}</span>
      </div>

      <p className="text-xl font-bold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  )
}

export function RevenueUpdatesCard() {
  const [year, setYear] = React.useState<YearOption>("2026")

  return (
    <Card className="h-full w-full overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-card-foreground">
            Revenue Updates
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of profit
          </p>
        </div>

        <Select
          value={year}
          onValueChange={(value) => setYear(value as YearOption)}
        >
          <SelectTrigger className="w-30">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>

          <SelectContent align="end">
            <SelectGroup>
              {yearOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  Year {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="w-full lg:col-span-2">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart
                accessibilityLayer
                data={revenueChartData}
                margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
                barSize={12}
              >
                <CartesianGrid vertical={false} />

                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                />

                <YAxis
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 6]}
                  tickMargin={8}
                  ticks={[0, 1, 2, 3, 4, 5, 6]}
                  tickFormatter={(value) => `${value}k`}
                />

                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />

                <Bar
                  dataKey="earnings"
                  fill="var(--color-earnings)"
                  radius={4}
                />
                <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
                <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
                <Bar dataKey="refunds" fill="var(--color-refunds)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>

          <div className="flex flex-col justify-between py-2">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                <HugeiconsIcon
                  icon={DashboardSquare01Icon}
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">$63,489.50</span>
              </div>

              <p className="text-sm text-muted-foreground">Total Earnings</p>
            </div>

            <div className="space-y-6">
              <RevenueSummaryItem
                label="Earnings this month"
                value="$48,820"
                dotClassName="bg-[var(--chart-1)]"
              />

              <RevenueSummaryItem
                label="Expense this month"
                value="$26,498"
                dotClassName="bg-[var(--chart-2)]"
              />
            </div>

            <Button className="mt-6 w-full">
              View Full Report
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
