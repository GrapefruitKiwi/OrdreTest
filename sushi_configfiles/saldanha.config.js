// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SS_SALDANHA",
    script: "./server.js",
    cwd: "../dist_sushi",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS: false,
      HTTPS_HEAD: "order",
      PORT: 500,
      QR_ADDR: "https://109.199.107.30:500/client.html?table=",
      TABLE_NUMBER: [[1, 35]],
      SAVE_ADDR: "save/ss_saldanha",
      ENABLE_ROAST_DUCK: false,
      RESERVE_URL: "https://www.google.com/",
    }
  }]
}