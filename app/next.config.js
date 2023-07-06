/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
        //   headers: [
        //     { key: "Access-Control-Allow-Origin", value: "http://localhost:8055" }, // replace this your actual origin
        // ],
          destination: 'http://localhost:4000/:path*'
        }
      ]
    }
  }
