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
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      
      },
      
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
      },
    ],
  },
};
