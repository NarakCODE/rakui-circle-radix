import type { ReactNode } from "react"

import { SidebarPageShell } from "@/components/shared/sidebar-page-shell"
import { cn } from "@/lib/utils"

type DashboardPageShellProps = {
  title: string
  description?: string
  action?: ReactNode
  children?: ReactNode
}

const dashboardContentClassName = "mx-auto w-full max-w-full"

export function DashboardPageShell({
  title,
  description,
  action,
  children,
}: DashboardPageShellProps) {
  return (
    <SidebarPageShell
      sectionLabel="Dashboard"
      title={title}
      description={description}
      action={action}
    >
      <div className={cn(dashboardContentClassName)}>{children}</div>
    </SidebarPageShell>
  )
}
