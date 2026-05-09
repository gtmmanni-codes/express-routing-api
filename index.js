let express = require("express");
require("dotenv").config(); //configuring .env file
const { checkToken } = require("./checkTokenMiddleware");

let app = express();

//for receiving json data
app.use(express.json());

//adding application level middleware


/*
app.use(checkToken);
app.use((req,res,next)=>{
     
    if(req.query.password=="" || req.query.password == undefined){
        return res.send({
            status:0,
            msg : "Please fill the password"
        })
    }else if(req.query.password != process.env.myPassword){
        return res.send({
            status:0,
            msg : "Please fill correct Password"
        })
    }else{
        next();
    }
    

})
*/
app.get("/", (req, res) => {
    res.send({ status: 200, message: "Home page here" })
});

//ADDED PARAMS PARAMETERS

app.get("/news/:id", (req, res) => {
    res.send({ status: 200, message: "News page here" + req.params.id })
});


//route level middleware
app.get("/product", checkToken, (req, res) => {
    res.send({ status: 200, message: "Product page here" })
});

//ADDED BODY AND QUERY PARAMETERS
//use post to get data in much secure form as we can't display directly on browser
app.post("/about", (req, res) => {


    res.send({
        status: 200,
        Message: "Sucessful",
        BodyData: req.body,
        queryData: req.query,
    });

})


//port number
app.listen(process.env.myPort, () => {
    console.log("Successfull")
});


