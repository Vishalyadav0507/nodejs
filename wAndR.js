const http=require('http')

const route=require('./route')

let server=http.createServer(route.handler)

console.log(route.text)

server.listen(3000)