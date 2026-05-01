let express = require("express");

let app = express();

//for receiving json data
app.use(express.json());

//adding application level middleware


let myToken = "12345";
let myPassword = "password";

let checkToken = (req,res,next)=>{
    
    if(req.query.token=="" || req.query.token == undefined){
        return res.send({
            status:0,
            msg : "Please fill the token"
        })
    }else if(req.query.token != myToken){
        return res.send({
            status:0,
            msg : "Please fill correct token"
        })
    }else{
        next();
    }
    
}


app.use(checkToken);
app.use((req,res,next)=>{
     
    if(req.query.password=="" || req.query.password == undefined){
        return res.send({
            status:0,
            msg : "Please fill the password"
        })
    }else if(req.query.password != myPassword){
        return res.send({
            status:0,
            msg : "Please fill correct Password"
        })
    }else{
        next();
    }
    

})

app.get("/",(req,res)=>{
    res.send({status:200,message:"Home page here"})
});

//ADDED PARAMS PARAMETERS

app.get("/news/:id",(req,res)=>{
    res.send({status:200,message:"News page here"+req.params.id})
});

app.get("/product",(req,res)=>{
    res.send({status:200,message:"Product page here"})
});

//ADDED BODY AND QUERY PARAMETERS
//use post to get data in much secure form as we can't display directly on browser
app.post("/about",(req,res)=>{
    
    
    res.send({
        status:200,
        Message:"Sucessful",
        BodyData: req.body ,
        queryData: req.query,
    });

})


//port number
app.listen("8000",()=>{
    console.log("Successfull")
});


