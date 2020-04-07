const express = require('express')

const app = express()
const port = process.argv[2]
let server

app.get('/', (req, res) => {
  console.log(`ip: ${req.ip}, port: ${port}, server: ${JSON.stringify(server.address())}`)

  res.send({
    ip: req.ip,
    host: req.hostname,
    port: port,
    server: server.address()
  })
})

server = app.listen(port || 3000, (err) => {
  if (err) throw err

  console.log(`server running ${JSON.stringify(server.address())}`)
})
