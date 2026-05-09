import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { revenueChartConfig, revenueTrendData } from "./data"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function RevenueTrendCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Monthly revenue trend</CardTitle>
        <CardDescription>
          Revenue and order volume across the storefront
        </CardDescription>
        <CardAction>
          <Badge variant="outline">2026</Badge>
        </CardAction>
      </CardHeader>

      <CardContent>
        <ChartContainer config={revenueChartConfig} className="h-80 w-full">
          <AreaChart
            accessibilityLayer
            data={revenueTrendData}
            margin={{ top: 8, right: 12, left: -18, bottom: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              yAxisId="revenue"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value}k`}
            />
            <YAxis yAxisId="orders" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.35}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.03}
                />
              </linearGradient>
            </defs>
            <Area
              yAxisId="revenue"
              type="natural"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              fill="url(#revenueGradient)"
              strokeWidth={2}
            />
            <Area
              yAxisId="orders"
              type="natural"
              dataKey="orders"
              stroke="var(--color-orders)"
              fill="transparent"
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
