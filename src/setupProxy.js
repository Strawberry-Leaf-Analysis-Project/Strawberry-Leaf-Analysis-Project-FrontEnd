const { createProxyMiddleware } = require('http-proxy-middleware');
const BasicApi = 'http://127.0.0.1:8000'
const BasicServerApi = 'http://127.0.0.1'
const api = 'api'
module.exports = function (app) {
  app.use(
    '/member'
    ,
    createProxyMiddleware({
      target: BasicApi,
      changeOrigin: true,
    })
  );
  app.use(
    '/board'
    ,
    createProxyMiddleware({
      target: BasicApi,
      changeOrigin: true,
    })
  );
  app.use(
    '/plants_group'
    ,
    createProxyMiddleware({
      target: BasicApi,
      changeOrigin: true,
    })
  );
  app.use(
    '/plants_detail'
    ,
    createProxyMiddleware({
      target: BasicApi,
      changeOrigin: true,
    })
  );
};