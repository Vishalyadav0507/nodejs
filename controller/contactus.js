const express=require('express')
const path=require('path')


const cont=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contect.html'))
}

module.exports=cont