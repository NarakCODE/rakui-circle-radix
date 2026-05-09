import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { categoryChartConfig, categorySalesData } from "./data"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function SalesByCategoryCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sales by category</CardTitle>
        <CardDescription>Top categories by revenue share</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={categoryChartConfig} className="h-72 w-full">
          <BarChart
            accessibilityLayer
            data={categorySalesData}
            layout="vertical"
            margin={{ top: 4, right: 12, left: 12, bottom: 4 }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={82}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
