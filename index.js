const express=require('express');
const http=require('http')

const app=express();

app.use((req,res,next)=>{
    console.log('into the middleware 1');
    next();
})

app.use((req,res,next)=>{
    console.log("into the middleware 2")
    res.send('<h1>Hello From express Js</h1>')
})

const server=http.createServer(app)

const PORT= process.env.PORT || 5000

server.listen(PORT)