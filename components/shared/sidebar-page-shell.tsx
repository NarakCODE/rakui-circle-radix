import type { ReactNode } from "react"

import { ThemeSelector } from "@/components/theme-selector"
import { PageHeader } from "@/components/shared/page-header"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { LanguageSwitcher } from "../language-switcher"

type SidebarPageShellProps = {
  sectionLabel: string
  title: string
  description?: string
  action?: ReactNode
  children?: ReactNode
}

export function SidebarPageShell({
  sectionLabel,
  title,
  description,
  action,
  children,
}: SidebarPageShellProps) {
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
            <span className="text-sm text-muted-foreground">
              {sectionLabel}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSelector />
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <PageHeader
            title={title}
            description={description ?? `Hello ${title}`}
            action={action}
          />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
