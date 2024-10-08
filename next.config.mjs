/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.istockphoto.com",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "gazo.ru",
          },
          {
            protocol: "https",
            hostname: "gasandmoney.ru",
          },
          {
            protocol: "https",
            hostname: "i.pinimg.com",
          }
        ],
      },
};

export default nextConfig;
