const express= require('express')
const router=express.Router()
const path=require('path')
// const rootDir=require('../util/path')

const adminController=require('../controller/admin')

router.get("/get-product",adminController)

router.post("/get-product",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
    
})

module.exports=router