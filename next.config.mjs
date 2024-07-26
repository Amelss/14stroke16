/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
