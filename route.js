const fs=require('fs')

function routeHandler(req,res){
    if(req.url==="/"){
        const data=fs.readFileSync('message.txt',"utf8")
        res.write("<html>")
        res.write("<body>")
        res.write(`${data}`)
        res.write(`<form action="/message" method="POST" ><input type="text" name="message"></input><button type="submit">submit</button></form>`)
        res.write("</body>")
        res.write("</html>")
        return res.end()
    }
    else if(req.url==="/message" && req.method==="POST"){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            const message=parsedBody.split('=')[1]
            fs.writeFileSync('message.txt',message)
            res.statusCode=302;
            res.setHeader('location',"/")
            return res.end()
        })
    }
}

// module.exports=routeHandler

// module.exports={
//     handler:routeHandler,
//     text:"this is hard code"
// }

module.exports.handler=routeHandler
module.exports.text="some code"