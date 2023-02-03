const express= require('express')
const router=express.Router()
const path=require('path')
// const rootDir=require('../util/path')

router.get("/get-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","view","add_product.html"))
})
router.post("/get-product",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
    
})

module.exports=router