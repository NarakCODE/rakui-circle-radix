import {
  Add01Icon,
  Download01Icon,
  MoreVerticalIcon,
  RefreshIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { AnalyticsStatsSection } from "./_components/analytics-stats-section"

import { DashboardPageShell } from "@/components/shared/dashboard-page-shell"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function AnalyticsPageActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">
        <HugeiconsIcon
          icon={Download01Icon}
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
        />
        Export
      </Button>

      <Button>
        <HugeiconsIcon
          icon={Add01Icon}
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
        />
        Add New
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="More actions">
            <HugeiconsIcon
              icon={MoreVerticalIcon}
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-auto">
          <DropdownMenuItem className="whitespace-nowrap">
            <HugeiconsIcon
              icon={RefreshIcon}
              size={16}
              strokeWidth={1.8}
              className="shrink-0"
              aria-hidden="true"
            />
            <span>Refresh analytics</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="whitespace-nowrap">
            <HugeiconsIcon
              icon={Download01Icon}
              size={16}
              strokeWidth={1.8}
              className="shrink-0"
              aria-hidden="true"
            />
            <span>Download report</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="whitespace-nowrap">
            <HugeiconsIcon
              icon={Settings02Icon}
              size={16}
              strokeWidth={1.8}
              className="shrink-0"
              aria-hidden="true"
            />
            <span>Report settings</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default function AnalyticsPage() {
  return (
    <DashboardPageShell
      title="Analytics"
      description="Check all the statistics"
      action={<AnalyticsPageActions />}
    >
      <AnalyticsStatsSection />
    </DashboardPageShell>
  )
}
