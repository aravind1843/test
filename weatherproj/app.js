const express= require("express")
const bodyParser=require("body-parser")
const https=require("https")
const app= express()

app.use(bodyParser.urlencoded({extended:true}));
//var url ='https://api.ncr.com/order/v3/orders'
app.listen(3001,function(){
    console.log("running");
})

app.get("/", function(req,res){
res.sendFile(__dirname+"/index.html");    
})

app.post("/",function(req,res){

    var city=req.body.CityName;
    var url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=7f3607f70c640ccef0021dd6f6c77f02"
    //var url="https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric&appid=7f3607f70c640ccef0021dd6f6c77f02"
    https.get(url, function(repsonse){
        console.log(repsonse.statusCode);
    
        repsonse.on("data", function(data){
            const weatherdata=JSON.parse(data);
            JSON.stringify(data);
            const temperature= weatherdata.main.temp;
            const weatherdisc= weatherdata.weather[0].description;
            const icon= weatherdata.weather[0].icon;
            var imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<p>and it feels like "+weatherdisc+"</p><br>")
            res.write("<h1>The temperature in "+city+" is "+temperature+"celcius</h1>"); 
            res.write("<img src="+imageurl+">")
            res.send();
            //console.log(weatherdata);
        })
    })
})

