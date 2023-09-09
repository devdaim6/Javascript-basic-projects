const exp=require("express");
const app=exp();
const bp=require("body-parser");
app.use(bp.urlencoded({extended:true}));
app.use(exp.static("public"));

app.listen(1001,function(){
    console.log("Server Started");

});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    let w=req.body.w;
    let h=req.body.h;
    console.log(w,h)
 

    let result=(w/(h*h))*10000;
    result=Math.round(result);
    res.sendFile("index.html");
})