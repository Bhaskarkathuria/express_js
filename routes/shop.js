const express=require('express');

const router=express.Router();

router.use('/',(req,res,next)=>{
    
    res.send("<h1>Welcome to express Js crash course</h1>")
})

module.exports=router