//jshint esversion:6
const express = require("express");
const app = express()

app.listen(3001,function(){
console.log("running");
});

app.get("/",function(req,res){
    res.send("<h1>Hello</h1");
})

app.get("/about",function(req,res){
    res.send("<h1>Test</h1");
})