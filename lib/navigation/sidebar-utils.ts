import type {
  AccessEvaluator,
  NavGroup,
  NavItem,
  NavMatchMode,
  RouteHref,
} from "@/lib/navigation/sidebar-types"

function matchesHref(
  pathname: string,
  href: RouteHref,
  matchMode: NavMatchMode = "prefix"
): boolean {
  if (matchMode === "exact") {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function isNavItemActive(item: NavItem, pathname: string): boolean {
  const candidateUrls = [item.href, ...(item.activeUrls ?? [])]
  const matchMode = item.matchMode ?? "prefix"

  return (
    candidateUrls.some((href) => matchesHref(pathname, href, matchMode)) ||
    (item.items?.some((child) => isNavItemActive(child, pathname)) ?? false)
  )
}

function filterNavItems(
  items: NavItem[],
  hasAccess?: AccessEvaluator
): NavItem[] {
  return items
    .filter((item) => (hasAccess ? hasAccess(item.permissions) : true))
    .map((item) => ({
      ...item,
      items: item.items ? filterNavItems(item.items, hasAccess) : undefined,
    }))
    .filter((item) => (item.items ? item.items.length > 0 : true))
}

export function filterNavGroups(
  groups: NavGroup[],
  hasAccess?: AccessEvaluator
) {
  return groups
    .filter((group) => (hasAccess ? hasAccess(group.permissions) : true))
    .map((group) => ({
      ...group,
      items: filterNavItems(group.items, hasAccess),
    }))
    .filter((group) => group.items.length > 0)
}
