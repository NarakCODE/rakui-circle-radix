import { ThemeSelector } from "@/components/theme-selector"
import { PageHeader } from "@/components/shared/page-header"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

type DashboardPageShellProps = {
  title: string
}

export function DashboardPageShell({ title }: DashboardPageShellProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex min-w-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <span className="text-sm text-muted-foreground">Dashboard</span>
          </div>
          <ThemeSelector />
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 lg:px-6">
            <PageHeader
              title={title}
              description={`Hello ${title}`}
            />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
