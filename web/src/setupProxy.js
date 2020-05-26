const { createProxyMiddleware } = require("http-proxy-middleware");
console.log(createProxyMiddleware);

module.exports = function(app) {
  const { MOCK } = process.env;
  let target = process.env.REACT_APP_API_ADDRESS;
  if (MOCK === "api") {
    target = process.env.REACT_APP_API_MOCK_ADDRESS;
  }
  app.use(createProxyMiddleware("/gfashion", { target, changeOrigin: true }));
};
