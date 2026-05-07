import Image from "next/image"
import { ArrowRight, CalendarDays, ShoppingBag } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const overviewStats = [
  {
    label: "Earnings",
    value: "$27,850",
    change: "+18%",
    tone: "positive" as const,
  },
  {
    label: "Expenses",
    value: "$18,453",
    change: "-5%",
    tone: "negative" as const,
  },
] as const

const sideCards = [
  {
    title: "Weekly Sales",
    value: "$4,587",
    change: "+18%",
    icon: CalendarDays,
  },
  {
    title: "Purchase Orders",
    value: "230",
    change: "+18%",
    icon: ShoppingBag,
  },
] as const

function ChangeBadge({
  value,
  tone,
}: {
  value: string
  tone: "positive" | "negative"
}) {
  return (
    <Badge
      variant={tone === "positive" ? "secondary" : "destructive"}
      className="h-6 rounded-full px-2.5 text-xs font-medium"
    >
      {value}
    </Badge>
  )
}

function MetricBlock({
  label,
  value,
  change,
  tone,
  className,
}: {
  label: string
  value: string
  change: string
  tone: "positive" | "negative"
  className?: string
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="flex flex-wrap items-center gap-2.5">
        <p className="text-3xl font-semibold tracking-tight text-foreground">
          {value}
        </p>
        <ChangeBadge value={change} tone={tone} />
      </div>
    </div>
  )
}

function ReportCard({
  title,
  value,
  change,
  icon: Icon,
}: (typeof sideCards)[number]) {
  return (
    <Card className="h-full border-border bg-card shadow-none">
      <CardHeader className="gap-4 pb-0">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <div className="flex flex-wrap items-center gap-2.5">
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                {value}
              </p>
              <ChangeBadge value={change} tone="positive" />
            </div>
          </div>

          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
            <Icon className="size-5" aria-hidden="true" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <Button variant="outline" className="w-full justify-between">
          <span>See report</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </CardContent>
    </Card>
  )
}

export function AnalyticsStatsShowcase() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <Card className="border-border bg-card shadow-none md:col-span-2 xl:col-span-1">
        <CardHeader className="gap-2 pb-0">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Analytics Dashboard
          </CardTitle>
          <CardDescription>Check all the statistics</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6 pt-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
          <div className="grid gap-5 sm:grid-cols-2">
            {overviewStats.map((stat) => (
              <MetricBlock
                key={stat.label}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                tone={stat.tone}
                className="rounded-lg border border-border bg-muted/30 p-4"
              />
            ))}
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

      {sideCards.map((card) => (
        <ReportCard key={card.title} {...card} />
      ))}
    </section>
  )
}
