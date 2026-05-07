"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ExpandMenuIcon } from "@/components/icons/sidebar-icons"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import type { NavItem } from "@/lib/navigation/sidebar-types"
import { isNavItemActive } from "@/lib/navigation/sidebar-utils"

export function NavMain({
  label = "Platform",
  items,
}: {
  label?: string
  items: NavItem[]
}) {
  const pathname = usePathname()

  const renderSubItems = (subItems: NavItem[]) => (
    <SidebarMenuSub>
      {subItems.map((subItem) => {
        const isSubItemActive = isNavItemActive(subItem, pathname)
        const SubIcon = subItem.icon
        const subItemKey = subItem.href ?? subItem.title

        return (
          <SidebarMenuSubItem key={subItemKey}>
            <SidebarMenuSubButton asChild={Boolean(subItem.href)} isActive={isSubItemActive}>
              {subItem.href ? (
                <Link href={subItem.href}>
                  {SubIcon ? <SubIcon aria-hidden="true" className="size-4" /> : null}
                  <span>{subItem.title}</span>
                </Link>
              ) : (
                <>
                  {SubIcon ? <SubIcon aria-hidden="true" className="size-4" /> : null}
                  <span>{subItem.title}</span>
                </>
              )}
            </SidebarMenuSubButton>
            {subItem.items?.length ? renderSubItems(subItem.items) : null}
          </SidebarMenuSubItem>
        )
      })}
    </SidebarMenuSub>
  )

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = isNavItemActive(item, pathname)
          const hasChildren = Boolean(item.items?.length)
          const itemKey = item.href ?? item.title

          if (!hasChildren && item.href) {
            return (
              <SidebarMenuItem key={itemKey}>
                <SidebarMenuButton asChild tooltip={item.title} isActive={isActive}>
                  <Link href={item.href}>
                    {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.badge ? (
                  <SidebarMenuBadge>{item.badge.label}</SidebarMenuBadge>
                ) : null}
              </SidebarMenuItem>
            )
          }

          return (
            <Collapsible
              key={`${itemKey}-${pathname}`}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} isActive={isActive}>
                    {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
                    <span>{item.title}</span>
                    {item.badge ? (
                      <SidebarMenuBadge>{item.badge.label}</SidebarMenuBadge>
                    ) : null}
                    <ExpandMenuIcon
                      aria-hidden="true"
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {item.items?.length ? renderSubItems(item.items) : null}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
