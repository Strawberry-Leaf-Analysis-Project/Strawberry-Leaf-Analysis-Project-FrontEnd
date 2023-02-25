const { createProxyMiddleware } = require('http-proxy-middleware');
const BasicApi = 'http://127.0.0.1:8000'
const BasicServerApi = 'http://127.0.0.1/api'
module.exports = function (app) {
  app.use(
    '/member'
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
  app.use(
    '/board'
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
  app.use(
    '/plants_group'
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
  app.use(
    '/plants_detail'
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
};