const exp=require("express");
const https=require("https");
const bp=require("body-parser");
const { response } = require("express");
const app=exp();
app.use(bp.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");


});//app.get

app.post("/",function(req,resp){

    const apikey="a41370e877ce7f6bc5b827bfba791b3f";
    const query=req.body.city;
    const units="metric"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&appid="+apikey;
    
  
        
        https.get(url,function(response){
            console.log();
           
            response.on('data',function(data){
            // console.log(data)
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const description=weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            
            // console.log(imgUrl);
            
            resp.write("<h1>Temperature in "+query+" is </h1>"+temp+" degrees Celcius<br>" );
            resp.write("<img src=" + imgUrl + ">");
            resp.write("<p>Currently "+description+" here in "+query+"</p><br>");
            resp.send();
            
                });//res.on 
            
            });//https.get 
        
  
}); //app.post




app.listen(1005,function(){
    console.log("Server Running on port 1005 ")
})