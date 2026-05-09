import { recentOrders, type OrderStatus } from "./data"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function statusBadgeVariant(status: OrderStatus) {
  if (status === "Refunded") {
    return "destructive" as const
  }

  if (status === "Pending") {
    return "outline" as const
  }

  return "secondary" as const
}

export function RecentOrdersTable() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent orders</CardTitle>
        <CardDescription>Latest customer purchases</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Channel</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{order.id}</span>
                    <span className="text-xs text-muted-foreground">
                      {order.time}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="hidden text-muted-foreground md:table-cell">
                  {order.channel}
                </TableCell>
                <TableCell>
                  <Badge variant={statusBadgeVariant(order.status)}>
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
  )
}
