/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow poster images loaded from picsum.photos (used as placeholder images)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
