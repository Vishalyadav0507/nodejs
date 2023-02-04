const express=require('express')

const adminRoute=require("./router/admin.js")
const shoproute=require('./router/shop')
const contectRoute=require('./router/contect')
const successRoute=require('./router/success')
const errorpath=require('./controller/404')

const bodyParser=require('body-parser')
const path = require('path')
// const rootDir=require('../util/path')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(contectRoute)
app.use('/admin',adminRoute)
app.use('/shop',shoproute)
app.use(successRoute)

app.use(errorpath)
app.listen(3000)