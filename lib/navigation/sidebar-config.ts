import {
  DashboardTemplateIcon,
  EcommerceTemplateIcon,
  TeamEnterpriseIcon,
  TeamFreeIcon,
  TeamStartupIcon,
  WorkspaceTemplateIcon,
} from "@/components/icons/sidebar-icons"
import type { SidebarConfig } from "@/lib/navigation/sidebar-types"

export const sidebarConfig = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: TeamEnterpriseIcon,
      plan: "Enterprise",
      href: "/dashboard/ecommerce",
    },
    {
      name: "Acme Corp.",
      logo: TeamStartupIcon,
      plan: "Startup",
      href: "/dashboard/crm",
    },
    {
      name: "Evil Corp.",
      logo: TeamFreeIcon,
      plan: "Free",
      href: "/dashboard/saas",
    },
  ],
  navGroups: [
    {
      id: "dashboard",
      label: "Dashboard",
      items: [
        {
          title: "Templates",
          href: "/dashboard",
          icon: DashboardTemplateIcon,
          activeUrls: ["/dashboard"],
          items: [
            {
              title: "Ecommerce",
              href: "/dashboard/ecommerce",
              icon: EcommerceTemplateIcon,
            },
            {
              title: "CRM",
              href: "/dashboard/crm",
              icon: WorkspaceTemplateIcon,
            },
            {
              title: "SaaS",
              href: "/dashboard/saas",
              icon: WorkspaceTemplateIcon,
            },
            {
              title: "Marketing",
              href: "/dashboard/marketing",
              icon: WorkspaceTemplateIcon,
            },
            {
              title: "Analytics",
              href: "/dashboard/analytics",
              icon: WorkspaceTemplateIcon,
            },
            {
              title: "Crypto",
              href: "/dashboard/crypto",
              icon: WorkspaceTemplateIcon,
            },
            {
              title: "Logistics",
              href: "/dashboard/logistics",
              icon: WorkspaceTemplateIcon,
            },
            {
              title: "Stocks",
              href: "/dashboard/stocks",
              icon: WorkspaceTemplateIcon,
            },
          ],
          metadata: {
            description: "Dashboard template routes",
          },
        },
      ],
    },
  ],
} satisfies SidebarConfig
