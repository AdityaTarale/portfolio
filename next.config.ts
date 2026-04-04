import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.wixstatic.com", // For appsphere-logo image
      },
      // {
      //   protocol: "https",
      //   hostname: "www.webtech23.com", // For 6Simplex logo
      // },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com", // For Flowbite images
      },
      {
        protocol: "https",
        hostname: "s7ap1.scene7.com", // For TCS logo
      },
      {
        protocol: "https",
        hostname: "nagpuruniversity.ac.in", // For RTMNU logo
      },
    ],
  },
};

export default nextConfig;
