const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/students',
    createProxyMiddleware({
      target: 'https://localhost:5000',
      changeOrigin: true,
      secure: false,  // allow self-signed certs
    })
  );
  app.use(
    '/add_user',
    createProxyMiddleware({
      target: 'https://localhost:5000',
      changeOrigin: true,
      secure: false,
    })
  );
};
