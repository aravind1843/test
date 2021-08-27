//jshint esvesion:6
const express = require("express")
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3001,function(){
console.log("running");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req,res){
    var weight=Number(req.body.Weight);
    var height=Number(req.body.Height);
    var result=(weight/(height*height));
    //console.log(req.body.fnumber)
    //res.send("test");
    res.send("result is "+result); 
})