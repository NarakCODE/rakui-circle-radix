"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { defaultLocale, isAppLocale } from "@/config/language-config"
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
  NavItem,
  Team,
  User,
} from "@/lib/navigation/sidebar-types"
import { filterNavGroups } from "@/lib/navigation/sidebar-utils"
import type { AppLocale } from "@/types/language-types"

const sidebarTranslations: Record<AppLocale, Record<string, string>> = {
  en: {
    Dashboard: "Dashboard",
    Analytics: "Analytics",
    eCommerce: "eCommerce",
    "CRM Dashboard": "CRM Dashboard",
    App: "App",
    Apps: "Apps",
    AI: "AI",
    Chat: "Chat",
    Image: "Image",
    Calendar: "Calendar",
    Chats: "Chats",
    Email: "Email",
    Notes: "Notes",
    Contacts: "Contacts",
    Invoice: "Invoice",
    List: "List",
    Details: "Details",
    Create: "Create",
    Edit: "Edit",
    "User Profile": "User Profile",
    Profile: "Profile",
    Followers: "Followers",
    Friends: "Friends",
    Gallery: "Gallery",
    Blogs: "Blogs",
    "Blog Post": "Blog Post",
    "Blog Detail": "Blog Detail",
    "Blog Edit": "Blog Edit",
    "Blog Create": "Blog Create",
    "Manage Blog": "Manage Blog",
    Ecommerce: "Ecommerce",
    Shop: "Shop",
    Checkout: "Checkout",
    "Add Product": "Add Product",
    "Edit Product": "Edit Product",
    Kanban: "Kanban",
    Tickets: "Tickets",
    Customers: "Customers",
    Orders: "Orders",
  },
  zh: {
    Dashboard: "仪表板",
    Analytics: "分析",
    eCommerce: "电子商务",
    "CRM Dashboard": "CRM 仪表板",
    App: "应用",
    Apps: "应用",
    AI: "AI",
    Chat: "聊天",
    Image: "图像",
    Calendar: "日历",
    Chats: "聊天",
    Email: "电子邮件",
    Notes: "笔记",
    Contacts: "联系人",
    Invoice: "发票",
    List: "列表",
    Details: "详情",
    Create: "创建",
    Edit: "编辑",
    "User Profile": "用户资料",
    Profile: "个人资料",
    Followers: "关注者",
    Friends: "好友",
    Gallery: "图库",
    Blogs: "博客",
    "Blog Post": "博客文章",
    "Blog Detail": "博客详情",
    "Blog Edit": "编辑博客",
    "Blog Create": "创建博客",
    "Manage Blog": "管理博客",
    Ecommerce: "电商",
    Shop: "商店",
    Checkout: "结账",
    "Add Product": "添加商品",
    "Edit Product": "编辑商品",
    Kanban: "看板",
    Tickets: "工单",
    Customers: "客户",
    Orders: "订单",
  },
  km: {
    Dashboard: "ផ្ទាំងគ្រប់គ្រង",
    Analytics: "វិភាគ",
    eCommerce: "ពាណិជ្ជកម្មអេឡិចត្រូនិក",
    "CRM Dashboard": "ផ្ទាំងគ្រប់គ្រង CRM",
    App: "កម្មវិធី",
    Apps: "កម្មវិធី",
    AI: "AI",
    Chat: "ជជែក",
    Image: "រូបភាព",
    Calendar: "ប្រតិទិន",
    Chats: "ការជជែក",
    Email: "អ៊ីមែល",
    Notes: "កំណត់ចំណាំ",
    Contacts: "ទំនាក់ទំនង",
    Invoice: "វិក្កយបត្រ",
    List: "បញ្ជី",
    Details: "លម្អិត",
    Create: "បង្កើត",
    Edit: "កែសម្រួល",
    "User Profile": "ប្រវត្តិរូបអ្នកប្រើ",
    Profile: "ប្រវត្តិរូប",
    Followers: "អ្នកតាមដាន",
    Friends: "មិត្តភក្តិ",
    Gallery: "វិចិត្រសាល",
    Blogs: "ប្លក់",
    "Blog Post": "អត្ថបទប្លក់",
    "Blog Detail": "លម្អិតប្លក់",
    "Blog Edit": "កែសម្រួលប្លក់",
    "Blog Create": "បង្កើតប្លក់",
    "Manage Blog": "គ្រប់គ្រងប្លក់",
    Ecommerce: "ហាងអនឡាញ",
    Shop: "ហាង",
    Checkout: "ទូទាត់",
    "Add Product": "បន្ថែមផលិតផល",
    "Edit Product": "កែសម្រួលផលិតផល",
    Kanban: "កានបាន",
    Tickets: "សំបុត្រ",
    Customers: "អតិថិជន",
    Orders: "ការបញ្ជាទិញ",
  },
}

function getLocaleFromPathname(pathname: string): AppLocale {
  const [, firstSegment] = pathname.split("/")

  return firstSegment && isAppLocale(firstSegment)
    ? firstSegment
    : defaultLocale
}

function translateNavItem(item: NavItem, locale: AppLocale): NavItem {
  const translations = sidebarTranslations[locale]

  return {
    ...item,
    title: translations[item.title] ?? item.title,
    badge: item.badge
      ? {
          ...item.badge,
          label: translations[item.badge.label] ?? item.badge.label,
        }
      : item.badge,
    items: item.items?.map((childItem) => translateNavItem(childItem, locale)),
  }
}

function translateNavGroup(group: NavGroup, locale: AppLocale): NavGroup {
  const translations = sidebarTranslations[locale]

  return {
    ...group,
    label: translations[group.label] ?? group.label,
    items: group.items.map((item) => translateNavItem(item, locale)),
  }
}

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
  const pathname = usePathname()
  const activeLocale = React.useMemo(
    () => getLocaleFromPathname(pathname),
    [pathname]
  )
  const visibleNavGroups = filterNavGroups(navGroups, hasAccess)
  const translatedNavGroups = React.useMemo(
    () => visibleNavGroups.map((group) => translateNavGroup(group, activeLocale)),
    [activeLocale, visibleNavGroups]
  )

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        {translatedNavGroups.map((group) => (
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
