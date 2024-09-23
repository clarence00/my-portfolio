// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
  output: "export",
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
