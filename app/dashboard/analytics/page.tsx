import Image from "next/image"
import { CalendarDays, DollarSign, ReceiptText, ShoppingBag } from "lucide-react"

import { StatCard } from "@/components/shared/stat-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardPageShell } from "@/components/shared/dashboard-page-shell"

function ChangeBadge({
  value,
  positive = true,
}: {
  value: string
  positive?: boolean
}) {
  return (
    <Badge
      variant={positive ? "secondary" : "destructive"}
      className="rounded-full px-2.5"
    >
      {value}
    </Badge>
  )
}

export default function AnalyticsPage() {
  return (
    <DashboardPageShell
      title="Analytics"
      description="Check all the statistics"
    >
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
        <Card className="border-border bg-card shadow-none">
          <CardHeader className="gap-2 pb-0">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Analytics Dashboard
            </CardTitle>
            <CardDescription>Check all the statistics</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-6 pt-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                title="Earnings"
                value="$27,850"
                icon={<DollarSign className="size-3.5" aria-hidden="true" />}
                headerAside={<ChangeBadge value="+18%" />}
              />
              <StatCard
                title="Expenses"
                value="$18,453"
                icon={<ReceiptText className="size-3.5" aria-hidden="true" />}
                headerAside={<ChangeBadge value="-5%" positive={false} />}
              />
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <Image
                  src="https://shramdoot.in/wp-content/uploads/2023/09/Untitled-design-11-3.svg"
                  alt="Analytics dashboard illustration"
                  width={220}
                  height={180}
                  unoptimized
                  className="h-auto w-[180px] object-contain sm:w-[220px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <StatCard
            title="Weekly Sales"
            value="$4,587"
            icon={<CalendarDays className="size-3.5" aria-hidden="true" />}
            headerAside={<ChangeBadge value="+18%" />}
            footer={
              <p className="text-sm text-muted-foreground">
                Strong performance this week across core channels.
              </p>
            }
          />
          <StatCard
            title="Purchase Orders"
            value="230"
            icon={<ShoppingBag className="size-3.5" aria-hidden="true" />}
            headerAside={<ChangeBadge value="+18%" />}
            footer={
              <p className="text-sm text-muted-foreground">
                Order intake remains healthy and aligned with forecast.
              </p>
            }
          />
        </div>
      </section>
    </DashboardPageShell>
  )
}
