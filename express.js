const express=require('express')

const adminRoute=require("./router/admin")
const shoproute=require('./router/shop')
const contectRoute=require('./router/contect')
const successRoute=require('./router/success')

const bodyParser=require('body-parser')
const path = require('path')
// const rootDir=require('../util/path')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(contectRoute)
app.use('/admin',adminRoute)
app.use('/shop',shoproute)
app.use(successRoute)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"view","404.html"))
})
app.listen(3000)