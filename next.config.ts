import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "objectstorage.us-phoenix-1.oraclecloud.com",
        },
      ],
    },
};

export default nextConfig;
