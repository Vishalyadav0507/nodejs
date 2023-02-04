const express=require('express')

const router=express.Router()

const contactUsRoute=require('../controller/contact')

router.use("/contect",contactUsRoute)

module.exports=router