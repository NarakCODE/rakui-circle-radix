/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shramdoot.in",
      },
    ],
  },
}

export default nextConfig
