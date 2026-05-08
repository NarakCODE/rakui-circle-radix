import * as React from "react"
import {
  BankIcon,
  CreditCardIcon,
  DollarCircleIcon,
  MoreVerticalIcon,
  PieChartIcon,
  Wallet02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type RecentTransactionItemProps = {
  title: string
  description: string
  amount: string
  negative?: boolean
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
  iconClassName?: string
}

const recentTransactions: RecentTransactionItemProps[] = [
  {
    title: "PayPal Transfer",
    description: "Money added",
    amount: "+$6,235",
    icon: DollarCircleIcon,
    iconClassName: "text-blue-500",
  },
  {
    title: "Wallet",
    description: "Big Brands",
    amount: "+$345",
    icon: Wallet02Icon,
    iconClassName: "text-emerald-500",
  },
  {
    title: "Credit card",
    description: "Money reversed",
    amount: "+$2,235",
    icon: CreditCardIcon,
    iconClassName: "text-yellow-500",
  },
  {
    title: "Bank Transfer",
    description: "Money added",
    amount: "+$320",
    icon: BankIcon,
    iconClassName: "text-sky-500",
  },
  {
    title: "Refund",
    description: "Bill payment",
    amount: "-$32",
    icon: PieChartIcon,
    iconClassName: "text-red-500",
    negative: true,
  },
]

function RecentTransactionItem({
  title,
  description,
  amount,
  negative,
  icon,
  iconClassName,
}: RecentTransactionItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border">
          <HugeiconsIcon
            icon={icon}
            size={18}
            strokeWidth={1.8}
            className={iconClassName}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate font-medium">{title}</p>
          <p className="truncate text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <p
        className={cn("shrink-0 font-semibold", negative && "text-destructive")}
      >
        {amount}
      </p>
    </div>
  )
}

type RecentTransactionsCardProps = {
  className?: string
}

export function RecentTransactionsCard({
  className,
}: RecentTransactionsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open transactions menu"
            >
              <HugeiconsIcon
                icon={MoreVerticalIcon}
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>View report</DropdownMenuItem>
            <DropdownMenuItem>Export transactions</DropdownMenuItem>
            <DropdownMenuItem>Download statement</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="space-y-5">
        {recentTransactions.map((transaction) => (
          <RecentTransactionItem
            key={transaction.title}
            title={transaction.title}
            description={transaction.description}
            amount={transaction.amount}
            negative={transaction.negative}
            icon={transaction.icon}
            iconClassName={transaction.iconClassName}
          />
        ))}
      </CardContent>

      <CardFooter>
        <Button className="w-full">View full report</Button>
      </CardFooter>
    </Card>
  )
}
