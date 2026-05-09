import { topProducts } from "./data"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TopProductsCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Top-selling products</CardTitle>
        <CardDescription>Products driving the most revenue</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="mt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="hidden sm:table-cell">Sold</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product) => (
                  <TableRow key={product.name}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {product.category}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {product.sold}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {product.revenue}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="inventory" className="mt-2">
            <div className="flex flex-col gap-4">
              {topProducts.map((product) => (
                <div key={product.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-medium">
                      {product.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.stock} left
                    </span>
                  </div>
                  <Progress value={product.stock} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
