module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "/api": "/" },
      },
    },
  },
};
