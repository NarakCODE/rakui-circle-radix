"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { type ChartConfig, ChartContainer } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

export type StatWithCircularProgressItem = {
  name: string
  progress: number
  current: ReactNode
  budget: ReactNode
  href?: string
  fill?: string
  label?: string
}

type StatWithCircularProgressCardProps = {
  items: StatWithCircularProgressItem[]
  className?: string
  itemClassName?: string
  columnsClassName?: string
  linkLabel?: string
}

const chartConfig = {
  progress: {
    label: "Progress",
    color: "var(--primary)",
  },
} satisfies ChartConfig

function CircularProgress({
  progress,
  fill = "var(--primary)",
}: {
  progress: number
  fill?: string
}) {
  const value = Math.max(0, Math.min(100, progress))

  return (
    <div className="relative flex items-center justify-center">
      <ChartContainer config={chartConfig} className="size-20">
        <RadialBarChart
          data={[{ progress: value }]}
          innerRadius={30}
          outerRadius={60}
          barSize={6}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
            axisLine={false}
          />
          <RadialBar
            dataKey="progress"
            background
            cornerRadius={10}
            fill={fill}
            angleAxisId={0}
          />
        </RadialBarChart>
      </ChartContainer>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium tabular-nums">{value}%</span>
      </div>
    </div>
  )
}

export function StatWithCircularProgressCard({
  items,
  className,
  itemClassName,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-4",
  linkLabel = "View more",
}: StatWithCircularProgressCardProps) {
  return (
    <dl className={cn("grid grid-cols-1 gap-6", columnsClassName, className)}>
      {items.map((item) => (
        <Card key={item.name} className={cn("gap-0 p-0", itemClassName)}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CircularProgress progress={item.progress} fill={item.fill} />

              <div>
                <dd className="text-base font-medium">
                  {item.current} / {item.budget}
                </dd>
                <dt className="text-sm text-muted-foreground">
                  {item.label ?? `Budget ${item.name}`}
                </dt>
              </div>
            </div>
          </CardContent>

          {item.href ? (
            <CardFooter className="justify-end border-t p-0">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 px-6 py-3 text-sm font-medium text-primary hover:text-primary/90"
              >
                {linkLabel}
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </dl>
  )
}
