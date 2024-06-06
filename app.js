const http = require('http')
const PORT = 3000
const localhost = '127.0.0.1'

const server = http.createServer((req, res) => {
  res.statusCode = 200

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<html><body><h1>Ana Sehife</h1></body></html>')
  } else if (req.url === '/contact' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<html><body><h1>Contact Sehife</h1></body></html>')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<html><body><h1>Not Found</h1></body></html>')
  }
})

server.listen(PORT, localhost, () => {
  console.log('Server is running at ', PORT)
})
