const http=require('http')

const route=require('./route')

let server=http.createServer(route)
    

server.listen(3000)