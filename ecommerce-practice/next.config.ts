import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol:"https",
        hostname: "images.pexels.com",
      },
    ]
  },

  env: {
    APP_TITLE: "APP NAME",
  },
};

export default nextConfig;
