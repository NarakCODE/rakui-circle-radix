import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  AudioWave02Icon,
  Building03Icon,
  ChartBarLineIcon,
  CreditCardIcon,
  DashboardSquare01Icon,
  ListChevronsDownUpIcon,
  Logout01Icon,
  Notification02Icon,
  PlusSignIcon,
  SparklesIcon,
  Store01Icon,
  TerminalIcon,
  UserCircleIcon,
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

export const DashboardTemplateIcon = createSidebarIcon(
  DashboardSquare01Icon,
  "DashboardTemplateIcon"
)
export const EcommerceTemplateIcon = createSidebarIcon(
  Store01Icon,
  "EcommerceTemplateIcon"
)
export const WorkspaceTemplateIcon = createSidebarIcon(
  ChartBarLineIcon,
  "WorkspaceTemplateIcon"
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
