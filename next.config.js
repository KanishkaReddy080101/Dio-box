/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // Other config options
  async rewrites() {
    return [
      {
        source: '/events/:eventId',
        destination: '/events/[eventId]',
      },
    ];
  },
};

