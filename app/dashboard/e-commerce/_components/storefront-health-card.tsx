import { ArrowRight02Icon, ShoppingBag03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function StorefrontHealthCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <HugeiconsIcon
              icon={ShoppingBag03Icon}
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="font-medium">Storefront health is stable</p>
            <p className="text-sm text-muted-foreground">
              Checkout latency, payment approvals, and fulfillment queues are
              within target.
            </p>
          </div>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          View operations
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={16}
            strokeWidth={1.8}
            data-icon="inline-end"
            aria-hidden="true"
          />
        </Button>
      </CardContent>
    </Card>
  )
}
