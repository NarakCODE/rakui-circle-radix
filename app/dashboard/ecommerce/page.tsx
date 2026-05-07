import {
  ArrowRight,
  BadgeDollarSign,
  CreditCard,
  Download,
  Globe,
  Package,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { ThemeSelector } from "@/components/theme-selector"
import { PageHeader } from "@/components/shared/page-header"
import { StatCard } from "@/components/shared/stat-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const stats = [
  {
    title: "Gross revenue",
    value: "$128.4K",
    icon: <BadgeDollarSign className="size-5 text-primary" aria-hidden="true" />,
    footer: (
      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
        <TrendingUp className="size-4" aria-hidden="true" />
        +14.2% from last month
      </span>
    ),
  },
  {
    title: "Orders placed",
    value: "2,486",
    icon: <ShoppingBag className="size-5 text-primary" aria-hidden="true" />,
    footer: "184 orders are awaiting fulfillment",
  },
  {
    title: "Returning customers",
    value: "68%",
    icon: <Users className="size-5 text-primary" aria-hidden="true" />,
    footer: "Loyalty conversion improved by 6.4%",
  },
  {
    title: "Average order value",
    value: "$51.63",
    icon: <CreditCard className="size-5 text-primary" aria-hidden="true" />,
    footer: "Upsell bundles account for 21% of cart value",
  },
] as const

const revenueBars = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 58 },
  { label: "Wed", value: 71 },
  { label: "Thu", value: 64 },
  { label: "Fri", value: 83 },
  { label: "Sat", value: 94 },
  { label: "Sun", value: 76 },
] as const

const channels = [
  { name: "Direct", revenue: "$34.2K", share: 32, tone: "bg-chart-1" },
  { name: "Instagram Ads", revenue: "$26.8K", share: 25, tone: "bg-chart-2" },
  { name: "Email", revenue: "$21.1K", share: 20, tone: "bg-chart-3" },
  { name: "Affiliates", revenue: "$13.9K", share: 13, tone: "bg-chart-4" },
  { name: "Organic Search", revenue: "$10.5K", share: 10, tone: "bg-chart-5" },
] as const

const topProducts = [
  { name: "Nimbus running jacket", sku: "NJ-2041", sales: 482, revenue: "$18.1K" },
  { name: "Altitude trail pack", sku: "AT-8820", sales: 351, revenue: "$14.7K" },
  { name: "AeroFlex training tee", sku: "AF-1160", sales: 314, revenue: "$9.6K" },
  { name: "Summit commuter bottle", sku: "SC-4033", sales: 292, revenue: "$7.9K" },
] as const

const orders = [
  { id: "#10482", customer: "Leah Powell", status: "Packed", total: "$218.00" },
  { id: "#10479", customer: "Aiden Brooks", status: "Awaiting pickup", total: "$146.50" },
  { id: "#10475", customer: "Sophia Nguyen", status: "Delivered", total: "$84.20" },
  { id: "#10473", customer: "Marcus Reed", status: "Payment review", total: "$310.00" },
] as const

const statusBadges: Record<
  string,
  "default" | "secondary" | "outline" | "destructive"
> = {
  Packed: "default",
  "Awaiting pickup": "secondary",
  Delivered: "outline",
  "Payment review": "destructive",
}

const fulfillment = [
  {
    label: "Ready to ship",
    value: "126",
    detail: "Average handling time 2h 14m",
    icon: Truck,
  },
  {
    label: "Low inventory alerts",
    value: "8",
    detail: "Reorder winter outerwear and caps",
    icon: Package,
  },
  {
    label: "Campaigns live",
    value: "5",
    detail: "Holiday bundle, VIP early access, retargeting",
    icon: Sparkles,
  },
] as const

export default function EcommercePage() {
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="size-4" aria-hidden="true" />
              <span>Ecommerce overview</span>
            </div>
          </div>
          <ThemeSelector />
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 lg:px-6">
            <PageHeader
              title="Ecommerce Dashboard"
              description="Track revenue, product performance, and fulfillment health across your storefront."
              action={
                <>
                  <Button variant="outline" className="gap-2">
                    <RefreshCw className="size-4" aria-hidden="true" />
                    Refresh data
                  </Button>
                  <Button className="gap-2">
                    <Download className="size-4" aria-hidden="true" />
                    Export report
                  </Button>
                </>
              }
            />

            <section
              aria-labelledby="stats-heading"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              <h2 id="stats-heading" className="sr-only">
                Revenue and order metrics
              </h2>
              {stats.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  footer={stat.footer}
                />
              ))}
            </section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
              <Card className="shadow-sm">
                <CardHeader>
                  <div>
                    <CardTitle>Weekly revenue pulse</CardTitle>
                    <CardDescription>
                      Revenue accelerated over the weekend as paid social and
                      email campaigns peaked together.
                    </CardDescription>
                  </div>
                  <CardAction>
                    <Badge variant="secondary">Live</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-xl border bg-muted/30 p-4">
                      <p className="text-sm text-muted-foreground">
                        Conversion rate
                      </p>
                      <p className="mt-2 text-2xl font-semibold">4.82%</p>
                    </div>
                    <div className="rounded-xl border bg-muted/30 p-4">
                      <p className="text-sm text-muted-foreground">
                        Units sold
                      </p>
                      <p className="mt-2 text-2xl font-semibold">3,912</p>
                    </div>
                    <div className="rounded-xl border bg-muted/30 p-4">
                      <p className="text-sm text-muted-foreground">
                        Refund rate
                      </p>
                      <p className="mt-2 text-2xl font-semibold">1.3%</p>
                    </div>
                    <div className="rounded-xl border bg-muted/30 p-4">
                      <p className="text-sm text-muted-foreground">Net margin</p>
                      <p className="mt-2 text-2xl font-semibold">28.4%</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Daily gross revenue</span>
                      <span>$18.4K average</span>
                    </div>
                    <div className="grid h-64 grid-cols-7 items-end gap-3">
                      {revenueBars.map((bar) => (
                        <div
                          key={bar.label}
                          className="flex h-full flex-col justify-end gap-3"
                        >
                          <div className="rounded-2xl border bg-muted/20 p-2">
                            <div
                              className="w-full rounded-xl bg-primary/85 transition-[height] duration-500 ease-out"
                              style={{ height: `${bar.value}%` }}
                            />
                          </div>
                          <div className="text-center text-xs font-medium text-muted-foreground">
                            {bar.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <div>
                    <CardTitle>Revenue by channel</CardTitle>
                    <CardDescription>
                      High-intent traffic is leading the week, with direct and
                      social driving most growth.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {channels.map((channel) => (
                    <div key={channel.name} className="space-y-2">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium">{channel.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {channel.revenue}
                          </p>
                        </div>
                        <span className="text-sm font-medium">
                          {channel.share}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className={`h-2 rounded-full ${channel.tone}`}
                          style={{ width: `${channel.share}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,1fr)]">
              <Card className="shadow-sm">
                <CardHeader>
                  <div>
                    <CardTitle>Top products</CardTitle>
                    <CardDescription>
                      Best-performing catalog items by units sold and gross
                      revenue this week.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead className="text-right">Units sold</TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topProducts.map((product) => (
                        <TableRow key={product.sku}>
                          <TableCell className="font-medium">
                            {product.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {product.sku}
                          </TableCell>
                          <TableCell className="text-right">
                            {product.sales}
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {product.revenue}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <div>
                    <CardTitle>Fulfillment center</CardTitle>
                    <CardDescription>
                      Operational highlights from logistics, inventory, and
                      campaigns.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {fulfillment.map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 rounded-2xl border bg-muted/20 p-4"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background">
                          <Icon
                            className="size-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{item.label}</p>
                            <Badge variant="outline">{item.value}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="shadow-sm">
                <CardHeader>
                  <div>
                    <CardTitle>Recent orders</CardTitle>
                    <CardDescription>
                      Monitor the latest order changes and identify anything
                      that needs attention.
                    </CardDescription>
                  </div>
                  <CardAction>
                    <Button variant="ghost" size="sm" className="gap-2">
                      View all
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">
                            {order.id}
                          </TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>
                            <Badge variant={statusBadges[order.status]}>
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {order.total}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
