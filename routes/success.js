const express=require('express')
const path=require('path')
const success = require('../controller/success')

const router =express.Router()

router.post('/success',success)

module.exports=router