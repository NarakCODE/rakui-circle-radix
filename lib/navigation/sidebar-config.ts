import {
  AiChatMenuIcon,
  AiImageMenuIcon,
  AiMenuIcon,
  AppsMenuIcon,
  BlogsMenuIcon,
  CalendarMenuIcon,
  ChatsMenuIcon,
  ContactsMenuIcon,
  CustomersMenuIcon,
  DashboardAnalyticsIcon,
  DashboardCrmIcon,
  DashboardECommerceIcon,
  EcommerceMenuIcon,
  EmailMenuIcon,
  InvoiceMenuIcon,
  KanbanMenuIcon,
  NotesMenuIcon,
  OrdersMenuIcon,
  TeamEnterpriseIcon,
  TeamFreeIcon,
  TeamStartupIcon,
  TicketsMenuIcon,
  UserProfileMenuIcon,
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
      href: "/dashboard/analytics",
    },
    {
      name: "Acme Corp.",
      logo: TeamStartupIcon,
      plan: "Startup",
      href: "/apps",
    },
    {
      name: "Evil Corp.",
      logo: TeamFreeIcon,
      plan: "Free",
      href: "/apps/chats",
    },
  ],
  navGroups: [
    {
      id: "dashboard",
      label: "Dashboard",
      items: [
        {
          title: "Analytics",
          href: "/dashboard/analytics",
          icon: DashboardAnalyticsIcon,
          matchMode: "exact",
        },
        {
          title: "eCommerce",
          href: "/dashboard/e-commerce",
          icon: DashboardECommerceIcon,
          matchMode: "exact",
        },
        {
          title: "CRM Dashboard",
          href: "/dashboard/crm-dashboard",
          icon: DashboardCrmIcon,
          matchMode: "exact",
        },
      ],
    },
    {
      id: "app",
      label: "App",
      items: [
        {
          title: "Apps",
          href: "/apps",
          icon: AppsMenuIcon,
          matchMode: "exact",
        },
        {
          title: "AI",
          icon: AiMenuIcon,
          items: [
            {
              title: "Chat",
              href: "/apps/ai/chat",
              icon: AiChatMenuIcon,
            },
            {
              title: "Image",
              href: "/apps/ai/image",
              icon: AiImageMenuIcon,
            },
          ],
        },
        {
          title: "Calendar",
          href: "/apps/calendar",
          icon: CalendarMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Chats",
          href: "/apps/chats",
          icon: ChatsMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Email",
          href: "/apps/email",
          icon: EmailMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Notes",
          href: "/apps/notes",
          icon: NotesMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Contacts",
          href: "/apps/contacts",
          icon: ContactsMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Invoice",
          icon: InvoiceMenuIcon,
          items: [
            {
              title: "List",
              href: "/apps/invoice/list",
              icon: InvoiceMenuIcon,
            },
            {
              title: "Details",
              href: "/apps/invoice/details",
              icon: InvoiceMenuIcon,
            },
            {
              title: "Create",
              href: "/apps/invoice/create",
              icon: InvoiceMenuIcon,
            },
            {
              title: "Edit",
              href: "/apps/invoice/edit",
              icon: InvoiceMenuIcon,
            },
          ],
        },
        {
          title: "User Profile",
          icon: UserProfileMenuIcon,
          items: [
            {
              title: "Profile",
              href: "/apps/user-profile/profile",
              icon: UserProfileMenuIcon,
            },
            {
              title: "Followers",
              href: "/apps/user-profile/followers",
              icon: UserProfileMenuIcon,
            },
            {
              title: "Friends",
              href: "/apps/user-profile/friends",
              icon: UserProfileMenuIcon,
            },
            {
              title: "Gallery",
              href: "/apps/user-profile/gallery",
              icon: UserProfileMenuIcon,
            },
          ],
        },
        {
          title: "Blogs",
          icon: BlogsMenuIcon,
          items: [
            {
              title: "Blog Post",
              href: "/apps/blogs/blog-post",
              icon: BlogsMenuIcon,
            },
            {
              title: "Blog Detail",
              href: "/apps/blogs/blog-detail",
              icon: BlogsMenuIcon,
            },
            {
              title: "Blog Edit",
              href: "/apps/blogs/blog-edit",
              icon: BlogsMenuIcon,
            },
            {
              title: "Blog Create",
              href: "/apps/blogs/blog-create",
              icon: BlogsMenuIcon,
            },
            {
              title: "Manage Blog",
              href: "/apps/blogs/manage-blog",
              icon: BlogsMenuIcon,
            },
          ],
        },
        {
          title: "Ecommerce",
          icon: EcommerceMenuIcon,
          items: [
            {
              title: "Shop",
              href: "/apps/ecommerce/shop",
              icon: EcommerceMenuIcon,
            },
            {
              title: "Details",
              href: "/apps/ecommerce/details",
              icon: EcommerceMenuIcon,
            },
            {
              title: "List",
              href: "/apps/ecommerce/list",
              icon: EcommerceMenuIcon,
            },
            {
              title: "Checkout",
              href: "/apps/ecommerce/checkout",
              icon: EcommerceMenuIcon,
            },
            {
              title: "Add Product",
              href: "/apps/ecommerce/add-product",
              icon: EcommerceMenuIcon,
            },
            {
              title: "Edit Product",
              href: "/apps/ecommerce/edit-product",
              icon: EcommerceMenuIcon,
            },
          ],
        },
        {
          title: "Kanban",
          href: "/apps/kanban",
          icon: KanbanMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Tickets",
          href: "/apps/tickets",
          icon: TicketsMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Customers",
          href: "/apps/customers",
          icon: CustomersMenuIcon,
          matchMode: "exact",
        },
        {
          title: "Orders",
          href: "/apps/orders",
          icon: OrdersMenuIcon,
          matchMode: "exact",
        },
      ],
    },
  ],
} satisfies SidebarConfig
