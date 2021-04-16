const express = require('express')
const app = express();

app.use(express.json());
//named import
const port = require('./helper');
let mwfun1 = (req,res,next)=>{
    //We are creating a new property in req object
    req.body.surname = 'DOLLOR'; //surname property add
    req.body.result = 'Hello';
    next();
}
let mwfun2 = function(req,res,next){
    req.body.result = req.body.result +" "+ req.body.name;
    //
    next();
}
let mwfun3 = (req,res,next)=>{
    req.body.result = req.body.result + ' How';
    //
    next();
}
function mwfun4(req,res,next){
    req.body.result = req.body.result + " are ";
    next();
}
let mwfun5 = (req,res,next)=>{
    req.body.result = req.body.result + ' you?';
    next();
}

app.post('/getname',mwfun1,mwfun2,mwfun3,mwfun4,mwfun5,function (req, res) {
    let n = req.body.name;
    let sn = req.body.surname;
    let r = req.body.result;
    res.send({
        msg:r
    });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port} `);
})