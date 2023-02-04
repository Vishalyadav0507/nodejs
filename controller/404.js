const express=require('express')
const path=require('path')

const error=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"../","view","404.html"))
}

module.exports=error