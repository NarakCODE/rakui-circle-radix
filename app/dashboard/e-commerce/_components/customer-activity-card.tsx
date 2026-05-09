import { customerActivity } from "./data"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CustomerActivityCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Customer activity</CardTitle>
        <CardDescription>Engagement signals this month</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {customerActivity.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
            <Progress value={item.percent} />
          </div>
        ))}
      </CardContent>

      <CardFooter className="justify-between gap-3">
        <span className="text-sm text-muted-foreground">Repeat purchase rate</span>
        <Badge variant="secondary">42.6%</Badge>
      </CardFooter>
    </Card>
  )
}
