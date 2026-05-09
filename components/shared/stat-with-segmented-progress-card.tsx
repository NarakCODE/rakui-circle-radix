import type { ReactNode } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type StatSegmentedProgressItem = {
  label: string
  value: number
  className?: string
}

type StatWithSegmentedProgressCardProps = {
  title?: ReactNode
  used: number
  total: number
  unit?: string
  totalLabel?: string
  segments: StatSegmentedProgressItem[]
  showFree?: boolean
  className?: string
}

const defaultSegmentClassNames = [
  "bg-[var(--chart-1)]",
  "bg-[var(--chart-2)]",
  "bg-[var(--chart-3)]",
  "bg-[var(--chart-4)]",
]

export function StatWithSegmentedProgressCard({
  title = "Using Storage",
  used,
  total,
  unit = "MB",
  totalLabel = "GB",
  segments,
  showFree = true,
  className,
}: StatWithSegmentedProgressCardProps) {
  const freeValue = Math.max(total - used, 0)

  return (
    <Card className={cn(className)}>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          {title}{" "}
          <span className="font-medium text-foreground tabular-nums">
            {used.toLocaleString()} {unit}
          </span>{" "}
          of {total.toLocaleString()} {totalLabel}
        </p>

        <div className="mb-4 flex h-2 w-full overflow-hidden bg-muted">
          {segments.map((segment, index) => {
            const percentage = total > 0 ? (segment.value / total) * 100 : 0

            return (
              <div
                key={segment.label}
                className={cn(
                  "h-full",
                  segment.className ?? defaultSegmentClassNames[index]
                )}
                style={{ width: `${percentage}%` }}
                role="progressbar"
                aria-label={segment.label}
                aria-valuenow={segment.value}
                aria-valuemin={0}
                aria-valuemax={total}
              />
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {segments.map((segment, index) => (
            <div key={segment.label} className="flex items-center gap-2">
              <span
                className={cn(
                  "size-2.5 shrink-0",
                  segment.className ?? defaultSegmentClassNames[index]
                )}
                aria-hidden="true"
              />
              <span className="text-sm text-muted-foreground">
                {segment.label}
              </span>
              <span className="text-sm text-muted-foreground tabular-nums">
                {segment.value.toLocaleString()}
                {unit}
              </span>
            </div>
          ))}

          {showFree ? (
            <div className="flex items-center gap-2">
              <span className="size-2.5 shrink-0 bg-muted" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Free</span>
              <span className="text-sm text-muted-foreground tabular-nums">
                {freeValue.toLocaleString()}
                {unit}
              </span>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
