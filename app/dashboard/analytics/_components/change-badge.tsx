import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ChangeBadgeProps = {
  value: string
  positive?: boolean
}

export function ChangeBadge({ value, positive = true }: ChangeBadgeProps) {
  return (
    <Badge
      className={cn(
        "h-5 rounded-full border-transparent px-2 py-0.5 text-xs font-normal shadow-none",
        positive
          ? "bg-teal-500/10 text-teal-500 hover:bg-teal-500/10"
          : "bg-red-500/10 text-red-500 hover:bg-red-500/10"
      )}
    >
      {value}
    </Badge>
  )
}
