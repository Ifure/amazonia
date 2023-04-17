

// module.exports = {
//   images: {
//     domains: ['links.papareact.com', 'fakestoreapi.com/']
//   },
// }

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
},
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
  
}