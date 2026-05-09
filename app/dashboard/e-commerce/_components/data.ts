import type { HugeiconsIcon } from "@hugeicons/react"
import {
  AnalyticsUpIcon,
  BadgePercentIcon,
  PackageIcon,
  ShoppingBag03Icon,
  Store04Icon,
  TargetDollarIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

import type { ChartConfig } from "@/components/ui/chart"

export type MetricCardProps = {
  title: string
  value: string
  description: string
  trend: string
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
}

export type OrderStatus = "Paid" | "Pending" | "Shipped" | "Refunded"

export type RecentOrder = {
  id: string
  customer: string
  channel: string
  status: OrderStatus
  total: string
  time: string
}

export const metricCards: MetricCardProps[] = [
  {
    title: "Revenue overview",
    value: "$128.4K",
    description: "Net sales across all storefronts",
    trend: "+12.8%",
    icon: TargetDollarIcon,
  },
  {
    title: "Total orders",
    value: "3,284",
    description: "Orders placed this month",
    trend: "+8.4%",
    icon: ShoppingBag03Icon,
  },
  {
    title: "Conversion rate",
    value: "6.82%",
    description: "Visitors converted to checkout",
    trend: "+1.2%",
    icon: BadgePercentIcon,
  },
  {
    title: "Average order value",
    value: "$86.30",
    description: "Blended cart value",
    trend: "+4.6%",
    icon: Store04Icon,
  },
]

export const revenueTrendData = [
  { month: "Jan", revenue: 42, orders: 920 },
  { month: "Feb", revenue: 48, orders: 1080 },
  { month: "Mar", revenue: 51, orders: 1160 },
  { month: "Apr", revenue: 57, orders: 1320 },
  { month: "May", revenue: 63, orders: 1490 },
  { month: "Jun", revenue: 72, orders: 1710 },
  { month: "Jul", revenue: 79, orders: 1880 },
  { month: "Aug", revenue: 91, orders: 2140 },
  { month: "Sep", revenue: 96, orders: 2260 },
  { month: "Oct", revenue: 112, orders: 2510 },
  { month: "Nov", revenue: 118, orders: 2750 },
  { month: "Dec", revenue: 128, orders: 3284 },
]

export const categorySalesData = [
  { category: "Apparel", sales: 38 },
  { category: "Home", sales: 31 },
  { category: "Beauty", sales: 24 },
  { category: "Electronics", sales: 22 },
  { category: "Fitness", sales: 17 },
]

export const orderStatusData = [
  { status: "Paid", value: 46, fill: "var(--color-paid)" },
  { status: "Shipped", value: 28, fill: "var(--color-shipped)" },
  { status: "Pending", value: 18, fill: "var(--color-pending)" },
  { status: "Refunded", value: 8, fill: "var(--color-refunded)" },
]

export const recentOrders: RecentOrder[] = [
  {
    id: "#EC-4821",
    customer: "Maya Chen",
    channel: "Online Store",
    status: "Paid",
    total: "$248.00",
    time: "8 min ago",
  },
  {
    id: "#EC-4820",
    customer: "Noah Rivera",
    channel: "Marketplace",
    status: "Shipped",
    total: "$1,126.50",
    time: "22 min ago",
  },
  {
    id: "#EC-4819",
    customer: "Ava Brooks",
    channel: "POS",
    status: "Pending",
    total: "$89.90",
    time: "34 min ago",
  },
  {
    id: "#EC-4818",
    customer: "Liam Carter",
    channel: "Online Store",
    status: "Paid",
    total: "$412.75",
    time: "1 hr ago",
  },
  {
    id: "#EC-4817",
    customer: "Sofia Patel",
    channel: "Marketplace",
    status: "Refunded",
    total: "$64.20",
    time: "2 hrs ago",
  },
]

export const topProducts = [
  {
    name: "Everyday Linen Shirt",
    category: "Apparel",
    sold: 842,
    revenue: "$32,410",
    stock: 72,
  },
  {
    name: "Ceramic Pour-Over Kit",
    category: "Home",
    sold: 716,
    revenue: "$28,890",
    stock: 54,
  },
  {
    name: "Hydrating Serum Set",
    category: "Beauty",
    sold: 603,
    revenue: "$24,150",
    stock: 38,
  },
  {
    name: "Noise-Canceling Earbuds",
    category: "Electronics",
    sold: 438,
    revenue: "$39,420",
    stock: 26,
  },
]

export const customerActivity = [
  { label: "New customers", value: "1,428", percent: 72 },
  { label: "Returning customers", value: "2,386", percent: 64 },
  { label: "Abandoned carts recovered", value: "418", percent: 41 },
  { label: "Loyalty redemptions", value: "936", percent: 58 },
]

export const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  orders: {
    label: "Orders",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export const categoryChartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export const statusChartConfig = {
  paid: {
    label: "Paid",
    color: "var(--chart-1)",
  },
  shipped: {
    label: "Shipped",
    color: "var(--chart-2)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-3)",
  },
  refunded: {
    label: "Refunded",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export const operationsItems = [
  {
    label: "Ready to ship",
    value: "684",
    icon: PackageIcon,
    className: "bg-muted",
  },
  {
    label: "Active customers",
    value: "9,842",
    icon: UserGroupIcon,
    className: "bg-muted",
  },
  {
    label: "Projected growth",
    value: "+18.6%",
    icon: AnalyticsUpIcon,
    className: "bg-muted",
  },
]
