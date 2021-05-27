module.exports = {
    devServer: {
      proxy: {
        '/uaa': {
            target: process.env.PROXY_API,
            changeOrigin: true
        },
      }
    }
  }