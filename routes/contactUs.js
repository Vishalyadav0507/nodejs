const express=require('express')
const path=require('path');
const cont = require('../controller/contactus');


const router=express.Router()

router.get("/contactUs",cont)


module.exports = router;
