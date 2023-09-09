const exp=require("express");
const app=exp();
const bp=require("body-parser");
app.use(bp.urlencoded({extended:true}));

app.listen(1001,function(){
    console.log("Server Started");

});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    let h=req.body.height;

    let w=req.body.weight;
 

    let result=(w/(h*h));
   res.send("BMI : "+Math.round((result*10000))); 
})