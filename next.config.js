const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = phase => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["", "localhost", "api.vetnow.ir"],
      },
      env: {
        api: "http://localhost:3010/",
        baseUrl: "http://localhost:3010",
      },
    };
  }
  return {
    images: {
      domains: ["", "api.vetnow.ir"],
    },
    env: {
      api: "https://api.vetnow.ir/api/v1/",
      baseUrl: "https://api.vetnow.ir",
    },
  };
};

// module.exports = withPWA({

//   pwa: {
//     dest: "public",
//     register: true,
//     sw: "/sw.js",
//   },
// });