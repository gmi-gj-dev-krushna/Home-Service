/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "ap-south-1.graphassets.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
