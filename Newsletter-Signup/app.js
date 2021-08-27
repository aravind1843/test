const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3001,function(){
console.log("runnning");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")

})

app.post("/",function(req,res){
    var firstname=req.body.fname;
    var lastname=req.body.lname;
    var email=req.body.Email;
    //data to send
    var data={
        members: [
        {
        email_address:email,
        status: "subscribed",
        merge_fields:{
           FNAME: firstname,
           LNAME: lastname}
        } 
               ]
    };
    //url,auth,list and other arguments to send to
    //send the post request from server to mailchimp
    var Jsondata= JSON.stringify(data);
    var url='https://us10.api.mailchimp.com/3.0/lists/72facd5dda';
    var options= {
        host: 'https://us10.api.mailchimp.com/3.0/lists/72facd5dda',
        method:"POST",
        auth:"aravind:ff8dff96512fa83287deecd8389baffb-us10"
    };
    const requests= https.request(options,(response)=>{
    
    if (response.statusCode)
    {
        res.send("successfully subscribed");
    }
    else{
        res.send("there is an error signing up");
    }
    response.on('data',function(data){
    console.log(JSON.parse(data));
        })
    })

    requests.write(Jsondata);
    requests.end();
    
});
//19412bc4d8cd09740a6af939d94fbf86-us10

//72facd5dda


