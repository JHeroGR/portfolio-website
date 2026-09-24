const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/portfolio-website/",
  configureWebpack: {
    watchOptions: {
      poll: 2000, // Increased to 2 seconds to save laptop CPU/battery on an external drive
      aggregateTimeout: 500, 
      ignored: /node_modules/,
    },
  },
});
