import { HugeiconsIcon } from "@hugeicons/react"

import { operationsItems } from "./data"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function OperationsStrip() {
  return (
    <Card>
      <CardContent className="grid gap-4 pt-0 sm:grid-cols-3">
        {operationsItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div
              className={cn(
                "flex size-10 items-center justify-center rounded-lg text-muted-foreground",
                item.className
              )}
            >
              <HugeiconsIcon
                icon={item.icon}
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm text-muted-foreground">
                {item.label}
              </p>
              <p className="font-semibold tracking-tight">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
