/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb://localhost:27017/clEAR",
  },
};

module.exports = nextConfig;
