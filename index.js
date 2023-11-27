const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

const targetUrl = 'https://temptalk.onrender.com/';

const proxy = createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
});

app.use('/', proxy);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
