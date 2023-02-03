const express=require('express')
const router=express.Router()
const path=require('path')

router.use("/contect",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","view","contect.html"))
    
})

module.exports=router