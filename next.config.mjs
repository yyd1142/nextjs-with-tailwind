const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  pageExtensions: ['tsx', 'ts'],
  poweredByHeader: false,
  reactStrictMode: isProd,
  swcMinify: true,
  trailingSlash: false,
  compiler: {
    reactRemoveProperties: isProd,
    removeConsole: isProd,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: isProd,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
