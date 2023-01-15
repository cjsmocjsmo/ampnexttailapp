/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.0.91',
        port: '9090',
        pathname: '/static/**',
      },
    ],
  },
}
