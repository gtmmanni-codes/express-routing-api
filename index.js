let express = require("express");

let app = express();

app.get("/",(req,res)=>{
    res.send({status:200,message:"Home page here"})
});

app.get("/news",(req,res)=>{
    res.send({status:200,message:"News page here"})
});

app.get("/product",(req,res)=>{
    res.send({status:200,message:"Product page here"})
});

app.listen("8000");


