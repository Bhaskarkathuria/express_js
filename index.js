const express=require('express');
const http=require('http')
const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/product-page',(req,res,next)=>{
    
    res.send('<form action="/product" method="POST" ><input type="text" name="title" ><button type="submit" >Add Product</button></input><input type="text" name="size"><button type="submit">Enter Size</button></input></form>')
    
   
});
// app.use('/product-page',(req,res,next)=>{
//     res.send('<form action="/product" method="POST"><input type="text" name="size"><button type="submit">Enter Size</button></input></form>')
// })

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    
    res.send("<h1>Welcome to express Js crash course</h1>")
})


const server=http.createServer(app)

const PORT= process.env.PORT || 5000

server.listen(PORT)