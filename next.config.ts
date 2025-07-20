import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // scriptフォルダをビルドから除外
  pageExtensions: ['tsx', 'ts'],
  webpack: (config) => {
    // scriptフォルダを除外
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/script/**', '**/node_modules/**'],
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
