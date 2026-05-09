import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TrendType = "positive" | "negative" | "neutral"

export type StatWithLinkItem = {
  name: string
  value: ReactNode
  change?: string
  changeType?: TrendType
  href: string
  linkLabel?: string
}

type StatWithLinkCardProps = {
  items: StatWithLinkItem[]
  className?: string
  itemClassName?: string
  columnsClassName?: string
}

function getTrendClassName(changeType: TrendType = "neutral") {
  switch (changeType) {
    case "positive":
      return "text-primary"
    case "negative":
      return "text-destructive"
    default:
      return "text-muted-foreground"
  }
}

export function StatWithLinkCard({
  items,
  className,
  itemClassName,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
}: StatWithLinkCardProps) {
  return (
    <dl className={cn("grid grid-cols-1 gap-6", columnsClassName, className)}>
      {items.map((item) => (
        <Card key={item.name} className={cn("gap-0 p-0", itemClassName)}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <dt className="truncate text-sm text-muted-foreground">
                {item.name}
              </dt>

              {item.change ? (
                <span
                  className={cn(
                    "text-sm font-medium tabular-nums",
                    getTrendClassName(item.changeType)
                  )}
                >
                  {item.change}
                </span>
              ) : null}
            </div>

            <dd className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">
              {item.value}
            </dd>
          </CardContent>

          <CardFooter className="justify-end border-t p-0">
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 px-6 py-3 text-sm font-medium text-primary hover:text-primary/90"
            >
              {item.linkLabel ?? "View more"}
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </dl>
  )
}
