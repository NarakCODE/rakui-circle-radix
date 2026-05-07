import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AppStoreIcon,
  ArrowRight01Icon,
  AudioWave02Icon,
  BloggerIcon,
  BubbleChatIcon,
  Building03Icon,
  Calendar01Icon,
  ChartBarLineIcon,
  ContactBookIcon,
  CreditCardIcon,
  CustomerService01Icon,
  DashboardSquare01Icon,
  Invoice02Icon,
  KanbanIcon,
  ListChevronsDownUpIcon,
  Logout01Icon,
  Mail01Icon,
  NoteIcon,
  Notification02Icon,
  PlusSignIcon,
  Robot01Icon,
  SendingOrderIcon,
  ShoppingBag02Icon,
  SparklesIcon,
  Store01Icon,
  TerminalIcon,
  Ticket01Icon,
  UserCircleIcon,
  AiImageIcon,
} from "@hugeicons/core-free-icons"

import type { IconComponent, IconProps } from "@/lib/navigation/sidebar-types"

function createSidebarIcon(
  icon: IconSvgElement,
  displayName: string
): IconComponent {
  function SidebarIcon(props: IconProps) {
    return <HugeiconsIcon icon={icon} size={18} strokeWidth={1.8} {...props} />
  }

  SidebarIcon.displayName = displayName

  return SidebarIcon
}

export const TeamEnterpriseIcon = createSidebarIcon(
  Building03Icon,
  "TeamEnterpriseIcon"
)
export const TeamStartupIcon = createSidebarIcon(
  AudioWave02Icon,
  "TeamStartupIcon"
)
export const TeamFreeIcon = createSidebarIcon(TerminalIcon, "TeamFreeIcon")

export const DashboardAnalyticsIcon = createSidebarIcon(
  ChartBarLineIcon,
  "DashboardAnalyticsIcon"
)
export const DashboardECommerceIcon = createSidebarIcon(
  Store01Icon,
  "DashboardECommerceIcon"
)
export const DashboardCrmIcon = createSidebarIcon(
  DashboardSquare01Icon,
  "DashboardCrmIcon"
)
export const AppsMenuIcon = createSidebarIcon(AppStoreIcon, "AppsMenuIcon")
export const AiMenuIcon = createSidebarIcon(Robot01Icon, "AiMenuIcon")
export const AiChatMenuIcon = createSidebarIcon(
  BubbleChatIcon,
  "AiChatMenuIcon"
)
export const AiImageMenuIcon = createSidebarIcon(
  AiImageIcon,
  "AiImageMenuIcon"
)
export const CalendarMenuIcon = createSidebarIcon(
  Calendar01Icon,
  "CalendarMenuIcon"
)
export const ChatsMenuIcon = createSidebarIcon(BubbleChatIcon, "ChatsMenuIcon")
export const EmailMenuIcon = createSidebarIcon(Mail01Icon, "EmailMenuIcon")
export const NotesMenuIcon = createSidebarIcon(NoteIcon, "NotesMenuIcon")
export const ContactsMenuIcon = createSidebarIcon(
  ContactBookIcon,
  "ContactsMenuIcon"
)
export const InvoiceMenuIcon = createSidebarIcon(
  Invoice02Icon,
  "InvoiceMenuIcon"
)
export const UserProfileMenuIcon = createSidebarIcon(
  UserCircleIcon,
  "UserProfileMenuIcon"
)
export const BlogsMenuIcon = createSidebarIcon(BloggerIcon, "BlogsMenuIcon")
export const EcommerceMenuIcon = createSidebarIcon(
  ShoppingBag02Icon,
  "EcommerceMenuIcon"
)
export const KanbanMenuIcon = createSidebarIcon(KanbanIcon, "KanbanMenuIcon")
export const TicketsMenuIcon = createSidebarIcon(
  Ticket01Icon,
  "TicketsMenuIcon"
)
export const CustomersMenuIcon = createSidebarIcon(
  CustomerService01Icon,
  "CustomersMenuIcon"
)
export const OrdersMenuIcon = createSidebarIcon(
  SendingOrderIcon,
  "OrdersMenuIcon"
)

export const ExpandMenuIcon = createSidebarIcon(
  ArrowRight01Icon,
  "ExpandMenuIcon"
)
export const TeamSwitcherTriggerIcon = createSidebarIcon(
  ListChevronsDownUpIcon,
  "TeamSwitcherTriggerIcon"
)
export const AddTeamIcon = createSidebarIcon(PlusSignIcon, "AddTeamIcon")

export const UserMenuTriggerIcon = createSidebarIcon(
  ListChevronsDownUpIcon,
  "UserMenuTriggerIcon"
)
export const UpgradePlanIcon = createSidebarIcon(
  SparklesIcon,
  "UpgradePlanIcon"
)
export const AccountIcon = createSidebarIcon(
  UserCircleIcon,
  "AccountIcon"
)
export const BillingIcon = createSidebarIcon(
  CreditCardIcon,
  "BillingIcon"
)
export const NotificationsIcon = createSidebarIcon(
  Notification02Icon,
  "NotificationsIcon"
)
export const SignOutIcon = createSidebarIcon(Logout01Icon, "SignOutIcon")
