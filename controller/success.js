
const path= require('path')

const success=((req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'))
})

module.exports=success