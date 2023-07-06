const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/telegram.php",
    createProxyMiddleware({
      target: "http://localhost", // Замените на адрес вашего сервера
      changeOrigin: true,
    })
  );
};
