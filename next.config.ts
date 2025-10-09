import type { NextConfig } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const baseDomain = baseUrl.startsWith('http') ? new URL(baseUrl).hostname : baseUrl;

const nextConfig: NextConfig = {
  images: {
    domains: [
      'luminous-moonlight-71c42a9551.media.strapiapp.com',
      baseDomain
    ].filter(Boolean),
  },
  async headers() {
    const csp = [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
      "img-src 'self' data: https:;",
      "font-src 'self' https://fonts.gstatic.com;",
      "connect-src 'self' https://*.strapiapp.com;",
      "frame-ancestors 'self';",
      "object-src 'none';",
      "base-uri 'self';",
    ].join(' ');
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
          {
            key: 'X-Robots-Tag',
            value: 'index,follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig
