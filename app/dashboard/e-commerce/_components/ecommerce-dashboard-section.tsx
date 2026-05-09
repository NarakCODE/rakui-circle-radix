import { metricCards } from "./data"
import { CustomerActivityCard } from "./customer-activity-card"
import { MetricCard } from "./metric-card"
import { OperationsStrip } from "./operations-strip"
import { OrderStatusCard } from "./order-status-card"
import { RecentOrdersTable } from "./recent-orders-table"
import { RevenueTrendCard } from "./revenue-trend-card"
import { SalesByCategoryCard } from "./sales-by-category-card"
import { StorefrontHealthCard } from "./storefront-health-card"
import { TopProductsCard } from "./top-products-card"

export function EcommerceDashboardSection() {
  return (
    <section
      aria-label="Ecommerce performance"
      className="grid gap-4 xl:grid-cols-12"
    >
      {metricCards.map((metric) => (
        <div key={metric.title} className="sm:col-span-1 xl:col-span-3">
          <MetricCard {...metric} />
        </div>
      ))}

      <div className="xl:col-span-12">
        <OperationsStrip />
      </div>

      <div className="xl:col-span-8">
        <RevenueTrendCard />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:col-span-4 xl:grid-cols-1">
        <OrderStatusCard />
        <CustomerActivityCard />
      </div>

      <div className="xl:col-span-5">
        <SalesByCategoryCard />
      </div>

      <div className="xl:col-span-7">
        <TopProductsCard />
      </div>

      <div className="xl:col-span-12">
        <RecentOrdersTable />
      </div>

      <div className="xl:col-span-12">
        <StorefrontHealthCard />
      </div>
    </section>
  )
}
