//jshint esvesion:6
const express = require("express")
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3001,function(){
console.log("running");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
    var num1=Number(req.body.fnumber);
    var num2=Number(req.body.lnumber);
    var result=num2+num1;
    //console.log(req.body.fnumber)
    //res.send("test");
    res.send("result is "+result); 
})