"use client"

import { Pie, PieChart } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const yearlyBackupData = [
  {
    name: "2024",
    value: 38,
    fill: "var(--color-year2024)",
  },
  {
    name: "2025",
    value: 32,
    fill: "var(--color-year2025)",
  },
  {
    name: "Remaining",
    value: 30,
    fill: "var(--muted)",
  },
]

const chartConfig = {
  year2024: {
    label: "2024",
    color: "var(--chart-1)",
  },
  year2025: {
    label: "2025",
    color: "var(--chart-2)",
  },
  remaining: {
    label: "Remaining",
    color: "var(--muted)",
  },
} satisfies ChartConfig

type YearlyBackupCardProps = {
  className?: string
}

export function YearlyBackupCard({ className }: YearlyBackupCardProps) {
  return (
    <Card className={cn("s overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>Yearly Backup</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-[minmax(0,1fr)_112px] items-center gap-4">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              $36,358
            </p>

            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-500">
                +9%
              </span>
              <span className="text-muted-foreground">last year</span>
            </div>

            <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[var(--chart-1)]" />
                <span>2024</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[var(--chart-2)]" />
                <span>2025</span>
              </div>
            </div>
          </div>

          <ChartContainer
            config={chartConfig}
            className="aspect-square h-[112px] w-[112px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    nameKey="name"
                    formatter={(value, name) => (
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{name}</span>
                        <span className="font-medium text-foreground">
                          {value}%
                        </span>
                      </div>
                    )}
                  />
                }
              />

              <Pie
                data={yearlyBackupData}
                dataKey="value"
                nameKey="name"
                innerRadius={34}
                outerRadius={52}
                paddingAngle={0}
                strokeWidth={0}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
