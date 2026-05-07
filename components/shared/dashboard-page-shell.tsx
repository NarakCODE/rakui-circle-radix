import { SidebarPageShell } from "@/components/shared/sidebar-page-shell"

type DashboardPageShellProps = {
  title: string
}

export function DashboardPageShell({ title }: DashboardPageShellProps) {
  return <SidebarPageShell sectionLabel="Dashboard" title={title} />
}
