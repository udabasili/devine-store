const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({ 
  images: {
    domains: ["images.unsplash.com", 'i.ibb.co', 'wpbingosite.com', 'www.chicintuition.com'],
  },
   async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
});
