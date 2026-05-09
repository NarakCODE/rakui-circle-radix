import { Cell, Pie, PieChart } from "recharts"

import { orderStatusData, statusChartConfig } from "./data"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function OrderStatusCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Order status breakdown</CardTitle>
        <CardDescription>Current fulfillment state</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4 sm:grid-cols-[180px_1fr] xl:grid-cols-1">
        <ChartContainer
          config={statusChartConfig}
          className="mx-auto aspect-square h-44"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={orderStatusData}
              dataKey="value"
              nameKey="status"
              innerRadius={50}
              outerRadius={78}
              paddingAngle={2}
            >
              {orderStatusData.map((item) => (
                <Cell key={item.status} fill={item.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex flex-col justify-center gap-3">
          {orderStatusData.map((item) => (
            <div key={item.status} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm text-muted-foreground">
                  {item.status}
                </span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
