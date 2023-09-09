//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static("public"))

let items=[];
let emoji=["😁","😂",'😃','😄',"😅","😆","😇","😈","😉","😊","😋","😌",'😍','😎',"😏","😐","😑","😒","😓","😔",'😕',"😖",'😗',"😘","😙","😚","😛",'😜',"😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳",'😴','😵','😶','😷'];

app.get("/", function(req, res){
  let today=new Date();
  const Days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const options ={
    weekday:"long",
day:"numeric",
month:"long"
  }
  let time=today.toLocaleTimeString();
  let title=today.toLocaleDateString("en-US",options);
 
  res.render("list",{listTitle:title,time:time,newItem:items});
});


app.post("/",function(req,res){
 let item = req.body.item;
items.push(item + emoji[Math.floor(Math.random()*56)])
res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
