import { Calendar03Icon, ShoppingBag03Icon } from "@hugeicons/core-free-icons"

import { AnalyticsOverviewCard } from "./analytics-overview-card"
import { ReportCard } from "./report-card"
import { RevenueUpdatesCard } from "./revenue-updates-card"
import { MonthlyEarningsCard } from "./monthly-earnings-card"
import { YearlyBackupCard } from "./yearly-backup-card"
import { WeeklyStatsCard } from "./weekly-stats-card"
import { SalesFromLocationsCard } from "./sales-from-locations-card"
import { RecentTransactionsCard } from "./recent-transactions-card"
import TopCompaignsTable from "./top-compaigns-table"

export function AnalyticsStatsSection() {
  return (
    <section
      aria-label="Analytics statistics"
      className="grid gap-4 xl:grid-cols-12"
    >
      <div className="xl:col-span-6">
        <AnalyticsOverviewCard />
      </div>

      <div className="xl:col-span-3">
        <ReportCard
          title="Weekly Sales"
          value="$4,587"
          change="+18%"
          icon={Calendar03Icon}
        />
      </div>

      <div className="xl:col-span-3">
        <ReportCard
          title="Purchase Orders"
          value="230"
          change="+18%"
          icon={ShoppingBag03Icon}
        />
      </div>

      <div className="xl:col-span-8">
        <RevenueUpdatesCard />
      </div>

      <div className="xl:col-span-4">
        <MonthlyEarningsCard className="h-full" />
      </div>

      <div className="flex flex-col gap-4 xl:col-span-4">
        <YearlyBackupCard className="h-full" />
        <YearlyBackupCard className="h-full" />
      </div>

      <div className="xl:col-span-4">
        <WeeklyStatsCard />
      </div>

      <div className="xl:col-span-4">
        <SalesFromLocationsCard className="h-full" />
      </div>

      <div className="xl:col-span-8">
        <TopCompaignsTable />
      </div>

      <div className="xl:col-span-4">
        <RecentTransactionsCard />
      </div>
    </section>
  )
}
