/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-repo-name",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
