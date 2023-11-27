const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Define the target URL you want to proxy
const targetUrl = 'https://atlantic.onrender.com'; // Replace with the target URL you want to proxy

// Create a proxy middleware
const proxy = createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true, // Necessary for host header and other proxy headers to be set correctly
  // Add any other options you need, like pathRewrite, etc.
});

// Use the proxy middleware for all incoming requests
app.use('/', proxy);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
