const http = require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url=="/"){
    res.setHeader('content type','text/html')
    res.write("<html>")
    res.write("<h2>Welcome to my javaScript</h2>")
    res.write("</html>")
    res.end()}
    else if(req.url=="/about"){
        res.write("<html>")
        res.write("<h2>Welcome to about</h2>")
        res.write("</html>")
        res.end()
    }
    else if(req.url=="/home"){
        res.write("<html>")
        res.write("<h2>Welcome to home</h2>")
        res.write("</html>")
        res.end()
    }
    else if(req.url=="/node"){
        res.write("<html>")
        res.write("<h2>Welcome to node</h2>")
        res.write("</html>")
        res.end()
    }
})
server.listen(3000)
