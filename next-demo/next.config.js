/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tvmaze.com",
        pathname: "/uploads/images/**",
        // example string https:/static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg
      },
    ],
  },
};

module.exports = nextConfig;
