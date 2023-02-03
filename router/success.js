const express=require('express')
const router=express.Router()
const path= require('path');

router.use("/success",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","view","success.html"))
})

module.exports=router