import { notFound, redirect } from "next/navigation"

import { defaultLocale, isAppLocale, locales } from "@/config/language-config"
import { getPathname } from "@/i18n/navigation"

import AppsPage from "@/app/apps/page"
import AppsAiChatPage from "@/app/apps/ai/chat/page"
import AppsAiImagePage from "@/app/apps/ai/image/page"
import AppsBlogsBlogCreatePage from "@/app/apps/blogs/blog-create/page"
import AppsBlogsBlogDetailPage from "@/app/apps/blogs/blog-detail/page"
import AppsBlogsBlogEditPage from "@/app/apps/blogs/blog-edit/page"
import AppsBlogsBlogPostPage from "@/app/apps/blogs/blog-post/page"
import AppsBlogsManageBlogPage from "@/app/apps/blogs/manage-blog/page"
import AppsCalendarPage from "@/app/apps/calendar/page"
import AppsChatsPage from "@/app/apps/chats/page"
import AppsContactsPage from "@/app/apps/contacts/page"
import AppsEmailPage from "@/app/apps/email/page"
import AppsInvoiceCreatePage from "@/app/apps/invoice/create/page"
import AppsInvoiceDetailsPage from "@/app/apps/invoice/details/page"
import AppsInvoiceEditPage from "@/app/apps/invoice/edit/page"
import AppsInvoiceListPage from "@/app/apps/invoice/list/page"
import AppsNotesPage from "@/app/apps/notes/page"
import AppsUserProfileFollowersPage from "@/app/apps/user-profile/followers/page"
import AppsUserProfileFriendsPage from "@/app/apps/user-profile/friends/page"
import AppsUserProfileGalleryPage from "@/app/apps/user-profile/gallery/page"
import AppsUserProfileProfilePage from "@/app/apps/user-profile/profile/page"
import DashboardPage from "@/app/dashboard/page"
import DashboardAnalyticsPage from "@/app/dashboard/analytics/page"
import DashboardCrmPage from "@/app/dashboard/crm/page"
import DashboardCrmDashboardPage from "@/app/dashboard/crm-dashboard/page"
import DashboardCryptoPage from "@/app/dashboard/crypto/page"
import DashboardECommercePage from "@/app/dashboard/e-commerce/page"
import DashboardLogisticsPage from "@/app/dashboard/logistics/page"
import DashboardMarketingPage from "@/app/dashboard/marketing/page"
import DashboardSaasPage from "@/app/dashboard/saas/page"
import DashboardStocksPage from "@/app/dashboard/stocks/page"

type LocalizedPageProps = {
  params: Promise<{
    locale: string
    slug?: string[]
  }>
}

const localizedPageMap = {
  apps: AppsPage,
  "apps/ai/chat": AppsAiChatPage,
  "apps/ai/image": AppsAiImagePage,
  "apps/blogs/blog-create": AppsBlogsBlogCreatePage,
  "apps/blogs/blog-detail": AppsBlogsBlogDetailPage,
  "apps/blogs/blog-edit": AppsBlogsBlogEditPage,
  "apps/blogs/blog-post": AppsBlogsBlogPostPage,
  "apps/blogs/manage-blog": AppsBlogsManageBlogPage,
  "apps/calendar": AppsCalendarPage,
  "apps/chats": AppsChatsPage,
  "apps/contacts": AppsContactsPage,
  "apps/email": AppsEmailPage,
  "apps/invoice/create": AppsInvoiceCreatePage,
  "apps/invoice/details": AppsInvoiceDetailsPage,
  "apps/invoice/edit": AppsInvoiceEditPage,
  "apps/invoice/list": AppsInvoiceListPage,
  "apps/notes": AppsNotesPage,
  "apps/user-profile/followers": AppsUserProfileFollowersPage,
  "apps/user-profile/friends": AppsUserProfileFriendsPage,
  "apps/user-profile/gallery": AppsUserProfileGalleryPage,
  "apps/user-profile/profile": AppsUserProfileProfilePage,
  dashboard: DashboardPage,
  "dashboard/analytics": DashboardAnalyticsPage,
  "dashboard/crm": DashboardCrmPage,
  "dashboard/crm-dashboard": DashboardCrmDashboardPage,
  "dashboard/crypto": DashboardCryptoPage,
  "dashboard/e-commerce": DashboardECommercePage,
  "dashboard/logistics": DashboardLogisticsPage,
  "dashboard/marketing": DashboardMarketingPage,
  "dashboard/saas": DashboardSaasPage,
  "dashboard/stocks": DashboardStocksPage,
} as const

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocalizedPage({
  params,
}: LocalizedPageProps) {
  const { locale, slug } = await params

  if (!isAppLocale(locale)) {
    notFound()
  }

  if (!slug?.length) {
    redirect(
      getPathname({
        href: "/dashboard/analytics",
        locale: locale || defaultLocale,
      })
    )
  }

  const routeKey = slug.join("/") as keyof typeof localizedPageMap
  const PageComponent = localizedPageMap[routeKey]

  if (!PageComponent) {
    notFound()
  }

  return <PageComponent />
}
