import type { ComponentType } from "react"
import type { HugeiconsIconProps } from "@hugeicons/react"

export type RouteHref = `/${string}`

export type IconProps = Omit<HugeiconsIconProps, "icon">
export type IconComponent = ComponentType<IconProps>

export interface User {
  name: string
  email: string
  avatar: string
}

export interface Team {
  name: string
  logo: IconComponent
  plan: string
  href?: RouteHref
  metadata?: Record<string, string>
}

export interface NavBadge {
  label: string
}

export type NavMatchMode = "exact" | "prefix"

export interface NavItemMetadata {
  description?: string
  analyticsId?: string
  preview?: boolean
}

export interface NavItem {
  title: string
  href: RouteHref
  icon?: IconComponent
  badge?: NavBadge
  items?: NavItem[]
  matchMode?: NavMatchMode
  activeUrls?: RouteHref[]
  permissions?: string[]
  metadata?: NavItemMetadata
}

export interface NavGroup {
  id: string
  label: string
  items: NavItem[]
  permissions?: string[]
  metadata?: Record<string, string>
}

export interface SidebarConfig {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
}

export type AccessEvaluator = (permissions?: string[]) => boolean
