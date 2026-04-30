let express = require("express");

let app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({status:200,message:"Home page here"})
});

app.get("/news",(req,res)=>{
    res.send({status:200,message:"News page here"})
});

app.get("/product",(req,res)=>{
    res.send({status:200,message:"Product page here"})
});



app.post("/about",(req,res)=>{
    
    
    res.send({
        status:200,
        Message:"Sucessful",
        BodyData: req.body ,
        queryData: req.query,
    });

})

app.listen("8000");


