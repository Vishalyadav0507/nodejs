const express= require('express')

const path=require('path')

const adminController=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","view","add_product.html"))
}

module.exports=adminController