"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const salesLocationData = [
  { month: "Jan", usa: 42, india: 18 },
  { month: "Feb", usa: 70, india: 46 },
  { month: "Mar", usa: 55, india: 28 },
  { month: "Apr", usa: 16, india: 42 },
  { month: "May", usa: 50, india: 30 },
  { month: "Jun", usa: 52, india: 33 },
]

const chartConfig = {
  usa: {
    label: "USA",
    color: "var(--chart-1)",
  },
  india: {
    label: "India",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

type SalesFromLocationsCardProps = {
  className?: string
}

export function SalesFromLocationsCard({
  className,
}: SalesFromLocationsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <div>
          <CardTitle>Sales from Locations</CardTitle>
          <p className="text-sm text-muted-foreground">This Year</p>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-65 w-full">
          <BarChart
            accessibilityLayer
            data={salesLocationData}
            margin={{ top: 8, right: 8, left: -24, bottom: 0 }}
            barSize={8}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            <YAxis hide />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Bar
              dataKey="usa"
              stackId="sales"
              fill="var(--color-usa)"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="india"
              stackId="sales"
              fill="var(--color-india)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>

        <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-chart-1" />
            <span>USA</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-chart-2" />
            <span>India</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
