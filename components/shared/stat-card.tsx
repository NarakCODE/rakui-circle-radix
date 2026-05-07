// src/components/shared/stat-card.tsx

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type StatCardProps = {
  title: string
  value: string | number
  icon?: ReactNode
  footer?: ReactNode
  className?: string
}

export function StatCard({
  title,
  value,
  icon,
  footer,
  className,
}: StatCardProps) {
  return (
    <div className={cn("rounded-2xl border bg-card p-3 shadow-sm", className)}>
      <div className="rounded-xl border bg-muted/20 p-4">
        <div className="flex items-start gap-4">
          {icon ? (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm">
              {icon}
            </div>
          ) : null}

          <div className="min-w-0 space-y-4">
            <p className="text-lg font-medium text-muted-foreground">{title}</p>

            <p className="text-4xl font-medium tracking-tight text-foreground">
              {value}
            </p>
          </div>
        </div>
      </div>

      {footer ? (
        <div className="mt-4 px-2 text-sm text-muted-foreground">{footer}</div>
      ) : null}
    </div>
  )
}
