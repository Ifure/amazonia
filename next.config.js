

// module.exports = {
//   images: {
//     domains: ['links.papareact.com', 'fakestoreapi.com/']
//   },
// }

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}