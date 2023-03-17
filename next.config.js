/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const typescript= {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: false,
}

module.exports = nextConfig, typescript
