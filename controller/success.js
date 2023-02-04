const express=require('express')
const path= require('path')

const success=((req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","view","success.html"))
})

module.exports=success