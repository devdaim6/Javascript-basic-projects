const express=require("express");
const app= express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,function(err){
    console.error(err);
    console.log("Server Started at Port : 3000");
});


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
});
app.post("/",function(req,res){
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
    
    res.send("The Result is "+(num1+num2)+"!");
    
});
