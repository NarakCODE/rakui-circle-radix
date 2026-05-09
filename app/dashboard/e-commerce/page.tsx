"use client"

import { EcommerceDashboardSection } from "./_components/ecommerce-dashboard-section"
import { EcommercePageActions } from "./_components/ecommerce-page-actions"

import { DashboardPageShell } from "@/components/shared/dashboard-page-shell"
export default function DashboardECommercePage() {
  return (
    <DashboardPageShell
      title="eCommerce"
      description="Track revenue, orders, products, and customer activity"
      action={<EcommercePageActions />}
    >
      <EcommerceDashboardSection />
    </DashboardPageShell>
  )
}
