import type { ComponentProps } from "react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { StatCard } from "@/components/shared/stat-card"
import { Button } from "@/components/ui/button"

import { ChangeBadge } from "./change-badge"

type ReportCardProps = {
  title: string
  value: string
  change: string
  icon: ComponentProps<typeof HugeiconsIcon>["icon"]
  className?: string
}

export function ReportCard({
  title,
  value,
  change,
  icon,
  className,
}: ReportCardProps) {
  return (
    <StatCard
      title={title}
      value={value}
      icon={
        <HugeiconsIcon
          icon={icon}
          size={14}
          strokeWidth={2}
          aria-hidden="true"
        />
      }
      headerAside={<ChangeBadge value={change} />}
      footer={
        <Button type="button" variant="outline" size="sm">
          <span>See Report</span>
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      }
      className={className}
    />
  )
}
