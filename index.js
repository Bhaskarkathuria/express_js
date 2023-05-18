const express=require('express');
const http=require('http')
const bodyParser=require('body-parser')
const app=express();

const adminRoutes=require('./routes/admin')
const adminShop=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))



app.use(adminRoutes)

//app.use(adminShop)


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})




const server=http.createServer(app)

const PORT= process.env.PORT || 5000

server.listen(PORT)