/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/clEAR",
  },
   distDir: "build",
  output: 'export',
};

module.exports = nextConfig;
