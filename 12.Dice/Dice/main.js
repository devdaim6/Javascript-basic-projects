
let result= document.getElementById("result");
function rollTheDie(){
    
let randomDice=Math.floor((Math.random()*6)+1);
let randomDice2=Math.floor((Math.random()*6)+1);

    document.getElementById("img1").setAttribute('src', 'images/dice'+randomDice+'.png');
    document.getElementById("img2").setAttribute('src', 'images/dice'+randomDice2+'.png');
    checkWhoWon(randomDice,randomDice2);
}
function checkWhoWon(randomDice,randomDice2){

    if(randomDice===randomDice2){
        console.log(randomDice);
        console.log(randomDice2);
      result.innerText="Draw!";
    }else if(randomDice>randomDice2){
        console.log(randomDice);
        console.log(randomDice2);
        result.innerText="Player 1🚩Won! ";
    }else if(randomDice<randomDice2){
        console.log(randomDice);
        console.log(randomDice2);
        result.innerText="Player 2🏁Won!";  
    }
    
}