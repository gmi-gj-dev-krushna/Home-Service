/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: '/api/auth/:path*',
      }
    ]
  },
  images: {
    unoptimized: true,
    domains: [
      "ap-south-1.graphassets.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
