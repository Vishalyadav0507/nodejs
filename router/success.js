const express=require('express')
const router=express.Router()
const path= require('path');

const successPath= require('../controller/success')

router.use("/success",successPath)

module.exports=router