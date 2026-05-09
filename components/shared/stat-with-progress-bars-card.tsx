"use client"

import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ProgressTone = "default" | "success" | "warning" | "destructive"

export type StatProgressDetail = {
  label: string
  value: ReactNode
  percentage?: number
  className?: string
}

export type StatWithProgressBarsItem = {
  title: string
  value: ReactNode
  limit: ReactNode
  percentage: number
  tone?: ProgressTone
  status?: ReactNode
  warning?: ReactNode
  details?: StatProgressDetail[]
  actionLabel?: string
  actionIcon?: ReactNode
  onActionClick?: () => void
}

type StatWithProgressBarsCardProps = {
  items: StatWithProgressBarsItem[]
  className?: string
  itemClassName?: string
  columnsClassName?: string
}

function getProgressClassName(tone: ProgressTone = "default") {
  switch (tone) {
    case "success":
      return "bg-primary"
    case "warning":
      return "bg-yellow-500"
    case "destructive":
      return "bg-destructive"
    default:
      return "bg-primary"
  }
}

function getStatusClassName(tone: ProgressTone = "default") {
  switch (tone) {
    case "success":
      return "text-primary"
    case "warning":
      return "text-yellow-600 dark:text-yellow-400"
    case "destructive":
      return "text-destructive"
    default:
      return "text-muted-foreground"
  }
}

function ProgressBar({ item }: { item: StatWithProgressBarsItem }) {
  const percentage = Math.max(0, Math.min(100, item.percentage))

  if (item.details?.some((detail) => detail.percentage !== undefined)) {
    return (
      <div className="flex h-1 w-full overflow-hidden bg-muted">
        {item.details.map((detail) => (
          <div
            key={detail.label}
            className={cn("h-full", detail.className ?? "bg-primary")}
            style={{
              width: `${Math.max(0, Math.min(100, detail.percentage ?? 0))}%`,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="h-1 w-full overflow-hidden bg-muted">
      <div
        className={cn("h-full", getProgressClassName(item.tone))}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

function ProgressDetails({ details }: { details?: StatProgressDetail[] }) {
  if (!details?.length) return null

  return (
    <div className="space-y-3">
      {details.map((detail) => (
        <div
          key={detail.label}
          className="flex items-center text-xs text-muted-foreground"
        >
          <span
            className={cn("mr-2 size-2 bg-primary", detail.className)}
            aria-hidden="true"
          />
          <span>{detail.label}</span>
          <span className="mx-2 flex-1 border-b border-dotted" />
          <span className="tabular-nums">{detail.value}</span>
        </div>
      ))}
    </div>
  )
}

export function StatWithProgressBarsCard({
  items,
  className,
  itemClassName,
  columnsClassName = "md:grid-cols-2 lg:grid-cols-4",
}: StatWithProgressBarsCardProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-3", columnsClassName, className)}>
      {items.map((item) => (
        <Card key={item.title} className={cn("gap-0", itemClassName)}>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {item.title}
              </p>

              <div className="mt-2 flex items-baseline gap-1">
                <p className="text-xl font-medium tracking-tight tabular-nums">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground">/ {item.limit}</p>
              </div>
            </div>

            <ProgressBar item={item} />

            <ProgressDetails details={item.details} />

            {item.status ? (
              <p className={cn("text-sm", getStatusClassName(item.tone))}>
                {item.status}
              </p>
            ) : null}

            {item.warning ? (
              <p className={cn("text-sm", getStatusClassName("warning"))}>
                {item.warning}
              </p>
            ) : null}
          </CardContent>

          {item.actionLabel ? (
            <CardFooter className="border-t p-0">
              <Button
                type="button"
                variant="ghost"
                className="w-full justify-start"
                onClick={item.onActionClick}
              >
                {item.actionIcon}
                {item.actionLabel}
              </Button>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  )
}
