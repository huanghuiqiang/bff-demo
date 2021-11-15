const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fs = require('fs');
const path = require('path');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/test', (req, res) => {
  fs.readFile(__dirname + '/data/books.json', 'utf8', (err,data) => {
      if (err) {
          return console.log(err);
      }
      res.jsonp(JSON.parse(data));
  })
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
// server.use(router)
server.listen(3006, () => {
  console.log('JSON Server is running, port is 3006')
})
