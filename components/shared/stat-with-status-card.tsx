import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"
import {
  Alert02Icon,
  ArrowRight02Icon,
  CheckmarkCircle02Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StatusType = "within" | "observe" | "critical"

export type StatWithStatusItem = {
  name: string
  value: ReactNode
  goalsAchieved: number
  totalGoals?: number
  status: StatusType
  href: string
}

type StatWithStatusCardProps = {
  items: StatWithStatusItem[]
  className?: string
  itemClassName?: string
  columnsClassName?: string
}

const statusConfig: Record<
  StatusType,
  {
    label: string
    icon: ComponentProps<typeof HugeiconsIcon>["icon"]
    className: string
  }
> = {
  within: {
    label: "Within target",
    icon: CheckmarkCircle02Icon,
    className: "text-primary",
  },
  observe: {
    label: "Observe",
    icon: ViewIcon,
    className: "text-muted-foreground",
  },
  critical: {
    label: "Critical",
    icon: Alert02Icon,
    className: "text-destructive",
  },
}

function StatusIndicator({ status }: { status: StatusType }) {
  const config = statusConfig[status]

  return (
    <span className="flex size-9 shrink-0 items-center justify-center border bg-background">
      <HugeiconsIcon
        icon={config.icon}
        size={18}
        strokeWidth={1.8}
        className={config.className}
        aria-hidden="true"
      />
    </span>
  )
}

export function StatWithStatusCard({
  items,
  className,
  itemClassName,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
}: StatWithStatusCardProps) {
  return (
    <dl className={cn("grid grid-cols-1 gap-6", columnsClassName, className)}>
      {items.map((item) => {
        const config = statusConfig[item.status]
        const totalGoals = item.totalGoals ?? 5

        return (
          <Card key={item.name} className={cn("relative", itemClassName)}>
            <CardContent className="space-y-6">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">
                  {item.value}
                </dd>
              </div>

              <div className="relative flex items-center justify-between gap-4 border bg-muted/40 p-2 hover:bg-muted">
                <div className="flex min-w-0 items-center gap-3">
                  <StatusIndicator status={item.status} />

                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">
                      <Link href={item.href} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.goalsAchieved}/{totalGoals} goals
                      </Link>
                    </p>

                    <p className={cn("text-sm font-medium", config.className)}>
                      {config.label}
                    </p>
                  </div>
                </div>

                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </dl>
  )
}
