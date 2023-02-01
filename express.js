const express=require('express')

const adminRoute=require("./router/admin")
const shoproute=require('./router/shop')

const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoute)
app.use('/shop',shoproute)

app.use((req,res,next)=>{
    res.status(404).send(`<h2>page not found</h2>`)
})
app.listen(3000)