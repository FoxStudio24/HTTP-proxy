// server.js
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: req.url, changeOrigin: true }, (e) => {
    res.writeHead(500);
    res.end('Proxy error: ' + e.message);
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log('Proxy server running');
});
