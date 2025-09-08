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
}

export default nextConfig
