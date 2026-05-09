import { HugeiconsIcon } from "@hugeicons/react"

import type { MetricCardProps } from "./data"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function MetricCard({
  title,
  value,
  description,
  trend,
  icon,
}: MetricCardProps) {
  return (
    <Card size="sm" className="h-full">
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
        <CardAction>
          <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <HugeiconsIcon
              icon={icon}
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{trend}</Badge>
          <span className="truncate text-xs text-muted-foreground">
            {description}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
