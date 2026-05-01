
let checkToken = (req,res,next)=>{
    
    if(req.query.token=="" || req.query.token == undefined){
        return res.send({
            status:0,
            msg : "Please fill the token"
        })
    }else if(req.query.token != process.env.myToken){
        return res.send({
            status:0,
            msg : "Please fill correct token"
        })
    }else{
        next();
    }
    
}

module.exports ={checkToken}
