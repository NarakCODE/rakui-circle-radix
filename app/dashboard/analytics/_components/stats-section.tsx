"use client"

import {
  ArrowRight02Icon,
  Calendar03Icon,
  ShoppingBag03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type TrendType = "up" | "down"

type TrendBadgeProps = {
  value: string
  type?: TrendType
}

function TrendBadge({ value, type = "up" }: TrendBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
        type === "up"
          ? "bg-emerald-50 text-emerald-600"
          : "bg-rose-50 text-rose-500"
      )}
    >
      {value}
    </span>
  )
}

type SummaryMetricProps = {
  label: string
  value: string
  trend: string
  trendType?: TrendType
  withDivider?: boolean
}

function SummaryMetric({
  label,
  value,
  trend,
  trendType = "up",
  withDivider,
}: SummaryMetricProps) {
  return (
    <div
      className={cn(
        "min-w-0 flex-1",
        withDivider && "border-l border-border pl-8"
      )}
    >
      <p className="text-sm font-medium text-muted-foreground">{label}</p>

      <div className="mt-2 flex items-center gap-3">
        <h3 className="text-3xl font-bold tracking-tight text-foreground">
          {value}
        </h3>
        <TrendBadge value={trend} type={trendType} />
      </div>
    </div>
  )
}

type ReportStatCardProps = {
  title: string
  value: string
  trend: string
  icon: typeof Calendar03Icon
  trendType?: TrendType
  className?: string
}

function ReportStatCard({
  title,
  value,
  trend,
  icon,
  trendType = "up",
  className,
}: ReportStatCardProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card p-8 shadow-xs",
        className
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h3>

          <div className="mt-5 flex items-center gap-3">
            <p className="text-4xl font-bold tracking-[0.08em] text-foreground">
              {value}
            </p>
            <TrendBadge value={trend} type={trendType} />
          </div>
        </div>

        <div className="flex size-16 shrink-0 items-center justify-center rounded-full border bg-background">
          <HugeiconsIcon
            icon={icon}
            size={28}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>
      </div>

      <Button variant="outline" className="mt-10 gap-2 rounded-lg px-5">
        See Report
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </Button>
    </section>
  )
}

export function StatsSection() {
  return (
    <section
      aria-label="Analytics statistics"
      className="grid gap-5 lg:grid-cols-12"
    >
      <section className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-xs lg:col-span-5">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Analytics Dashboard
          </h2>
          <p className="mt-2 text-base font-medium text-muted-foreground">
            Check all the statistics
          </p>

          <div className="mt-20 flex max-w-xl items-center gap-8">
            <SummaryMetric label="Earnings" value="$27,850" trend="+18%" />

            <SummaryMetric
              label="Expense"
              value="$18,453"
              trend="-5%"
              trendType="down"
              withDivider
            />
          </div>
        </div>

        <img
          src="https://shramdoot.in/wp-content/uploads/2023/09/Untitled-design-11-3.svg"
          alt=""
          className="pointer-events-none absolute right-8 bottom-0 hidden h-64 w-auto object-contain lg:block"
        />
      </section>

      <ReportStatCard
        title="Weekly Sales"
        value="$4,587"
        trend="+18%"
        icon={Calendar03Icon}
        className="lg:col-span-3"
      />

      <ReportStatCard
        title="Purchase Orders"
        value="230"
        trend="+18%"
        icon={ShoppingBag03Icon}
        className="lg:col-span-4"
      />
    </section>
  )
}
