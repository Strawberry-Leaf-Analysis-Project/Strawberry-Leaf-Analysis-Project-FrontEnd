const { createProxyMiddleware } = require('http-proxy-middleware');
const BasicApi = 'http://127.0.0.1:8000'
const BasicServerApi = 'http://127.0.0.1'
const api = '/api'
module.exports = function (app) {
  app.use(
    `${api}/member`
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
  app.use(
    `${api}/board`
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
  app.use(
    `${api}/plants_group`
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
  app.use(
    `${api}/plants_detail`
    ,
    createProxyMiddleware({
      target: BasicServerApi,
      changeOrigin: true,
    })
  );
};