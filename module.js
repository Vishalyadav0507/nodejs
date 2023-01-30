const http=require('http')

http.createServer((req,res)=>{
    console.log('i am vishal yadav')
    res.write("<h1> my name is vishal yadav</h1>")
    res.end()
}).listen(4000)