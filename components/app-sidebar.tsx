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
import {
  AudioLinesIcon,
  GalleryVerticalEndIcon,
  LayoutDashboardIcon,
  TerminalIcon,
} from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <GalleryVerticalEndIcon
        />
      ),
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <AudioLinesIcon
        />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <TerminalIcon
        />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Templates",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
      isActive: true,
      items: [
        {
          title: "Ecommerce",
          url: "/dashboard/ecommerce",
        },
        {
          title: "CRM",
          url: "/dashboard/crm",
        },
        {
          title: "SaaS",
          url: "/dashboard/saas",
        },
        {
          title: "Marketing",
          url: "/dashboard/marketing",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Crypto",
          url: "/dashboard/crypto",
        },
        {
          title: "Logistics",
          url: "/dashboard/logistics",
        },
        {
          title: "Stocks",
          url: "/dashboard/stocks",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain label="Dashboard" items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
