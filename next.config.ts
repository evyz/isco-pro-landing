import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/isco-pro", // важно: имя репозитория
  images: {
    unoptimized: true, // отключает оптимизацию картинок (иначе они не заработают)
  },
};

export default nextConfig;
