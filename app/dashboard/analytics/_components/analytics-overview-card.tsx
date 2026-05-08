import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { ChangeBadge } from "./change-badge"

type MetricItemProps = {
  label: string
  value: string
  change: string
  positive?: boolean
}

function MetricItem({
  label,
  value,
  change,
  positive = true,
}: MetricItemProps) {
  return (
    <div>
      <p className="text-xs font-normal text-muted-foreground">{label}</p>

      <div className="mt-1 flex items-center gap-1">
        <p className="text-2xl font-medium text-card-foreground">{value}</p>
        <ChangeBadge value={change} positive={positive} />
      </div>
    </div>
  )
}

export function AnalyticsOverviewCard() {
  return (
    <Card className="relative h-full overflow-hidden">
      <CardHeader>
        <CardTitle>Analytics Dashboard</CardTitle>
        <CardDescription>Check all the statistics</CardDescription>
      </CardHeader>
      <CardContent className="relative h-full p-0">
        <div className="relative z-10 flex h-full flex-col justify-between gap-8 py-1 ps-6 pe-6 sm:pe-56">
          <div className="flex items-center gap-6">
            <MetricItem label="Earnings" value="$27,850" change="+18%" />

            <Separator orientation="vertical" className="h-12" />

            <MetricItem
              label="Expense"
              value="$18,453"
              change="-5%"
              positive={false}
            />
          </div>
        </div>

        <Image
          src="https://cdn.prod.website-files.com/637b48b303cd69149f0b56b5/63dcc7eff171bb64d9ada278_hero-image.png"
          alt="Analytics dashboard illustration"
          width={211}
          height={168}
          unoptimized
          className="pointer-events-none absolute inset-e-2 -bottom-14 hidden size-44 object-contain sm:block"
        />
      </CardContent>
    </Card>
  )
}
