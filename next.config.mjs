/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-strapi-sm20.onrender.com',
        pathname: '/uploads/**', // Allow images under the uploads folder
      },
    ],
  },
};

export default nextConfig;

// https://cms-strapi-sm20.onrender.com
