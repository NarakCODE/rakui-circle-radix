import {
  Calendar03Icon,
  Download01Icon,
  MoreVerticalIcon,
  RefreshIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function EcommercePageActions() {
  return (
    <div className="flex items-center gap-2">
      <Select defaultValue="30d">
        <SelectTrigger size="sm" className="hidden sm:flex">
          <HugeiconsIcon
            icon={Calendar03Icon}
            size={16}
            strokeWidth={1.8}
            data-icon="inline-start"
            aria-hidden="true"
          />
          <SelectValue placeholder="Select range" />
        </SelectTrigger>

        <SelectContent align="end">
          <SelectGroup>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button variant="outline">
        <HugeiconsIcon
          icon={Download01Icon}
          size={16}
          strokeWidth={1.8}
          data-icon="inline-start"
          aria-hidden="true"
        />
        Export
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="More actions">
            <HugeiconsIcon
              icon={MoreVerticalIcon}
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-auto">
          <DropdownMenuGroup>
            <DropdownMenuItem className="whitespace-nowrap">
              <HugeiconsIcon
                icon={RefreshIcon}
                size={16}
                strokeWidth={1.8}
                className="shrink-0"
                aria-hidden="true"
              />
              <span>Refresh sales data</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="whitespace-nowrap">
              <HugeiconsIcon
                icon={Download01Icon}
                size={16}
                strokeWidth={1.8}
                className="shrink-0"
                aria-hidden="true"
              />
              <span>Download orders</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem className="whitespace-nowrap">
              <HugeiconsIcon
                icon={Settings02Icon}
                size={16}
                strokeWidth={1.8}
                className="shrink-0"
                aria-hidden="true"
              />
              <span>Dashboard settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
