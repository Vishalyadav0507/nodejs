
const express= require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use("/hello",(req,res,next)=>{
    res.send(`<form action="/get-product" method="POST" ><input type="text" name="title"></input><input type="text" name="size"></input><button type ="submit" >submit</button></form>`)
    
})
app.use("/get-product",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
    
})
app.use("/",(req,res,next)=>{
    res.send(`<h2>hello express</h2>`)
})
app.listen(3000)