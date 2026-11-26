const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
<<<<<<< HEAD
  publicPath: "/portfolio-website/",
=======
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '/',
>>>>>>> b0f66067993245f515c092a8047bfa8a41928dde
  configureWebpack: {
    watchOptions: {
      poll: 2000, // Increased to 2 seconds to save laptop CPU/battery on an external drive
      aggregateTimeout: 500, 
      ignored: /node_modules/,
    },
  },
});
