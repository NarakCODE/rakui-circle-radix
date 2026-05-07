"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { sidebarConfig } from "@/lib/navigation/sidebar-config"
import type {
  AccessEvaluator,
  NavGroup,
  Team,
  User,
} from "@/lib/navigation/sidebar-types"
import { filterNavGroups } from "@/lib/navigation/sidebar-utils"

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user?: User
  teams?: Team[]
  navGroups?: NavGroup[]
  hasAccess?: AccessEvaluator
}

export function AppSidebar({
  user = sidebarConfig.user,
  teams = sidebarConfig.teams,
  navGroups = sidebarConfig.navGroups,
  hasAccess,
  ...props
}: AppSidebarProps) {
  const visibleNavGroups = filterNavGroups(navGroups, hasAccess)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        {visibleNavGroups.map((group) => (
          <NavMain key={group.id} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
