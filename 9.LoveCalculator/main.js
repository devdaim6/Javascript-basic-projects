function checkLove(){
    setInterval(calculate(),5000);
}
function calculate(){
    let random=Math.floor((Math.random()*100)+1);
    let Value=document.getElementById("lovevalue");
    Value.value=random;
}