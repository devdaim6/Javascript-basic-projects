let rock=document.getElementById("rock");   //selected the rock image
let paper=document.getElementById("paper"); //selected the paper image
let scissor=document.getElementById("scissor"); //selected the scissor image
let result=document.getElementById("result");   //Result element 
const choice=["rock","paper","scissor"];    //array for the computer choices
let moves=5;
let playerScore=0;
let computerScore=0;
let movesDisplay=document.getElementById("moves");
let playerDisplay=document.getElementById("player");
let computerDisplay=document.getElementById("computer");
function writeScore(){
    
    movesDisplay.innerText="Moves : "+moves;
    playerDisplay.innerText="Player : "+playerScore;
    computerDisplay.innerText="Computer : "+computerScore;
    setInterval(checkScore(),1000);

}
function checkScore(){
    if(moves===0 || moves <1){
        if(playerScore>computerScore)
        window.alert("Game Over!" + "Congrats You Won!\n"+ "your score : "+playerScore +" Computer Score : "+ computerScore);
        else if(playerScore<computerScore){
            window.alert("Game Over!" + "Sad Life You Lose!\n"+ "your score : "+playerScore +" Computer Score : "+ computerScore+"Try Again");
            
        }    
        else if(playerScore===computerScore){
            window.alert("Game Over!" + "Draw!\n"+ "your score : "+playerScore +" Computer Score : "+ computerScore);
            
        }
    }
    
}
function rockInput(){

    //event listener for rock
    rock.addEventListener('click',(e)=>{
        if(choice[Math.floor(Math.random()*3)]==="rock"){
            result.innerText="Draw! I also choose Rock";
            moves--;
        }
        else if(choice[Math.floor(Math.random()*3)]==="paper"){
            result.innerText="Alas! You Lost (I choose paper)";
            computerScore++;
            moves--;
        }
        
        else if(choice[Math.floor(Math.random()*3)]==="scissor"){
            result.innerText="Congrats! You Won (I choose scissors and ' You broke me into pieces :) ')";
            playerScore++;
            moves--;
        }
    });
    setInterval(writeScore(),1000);
    setInterval(checkScore(),1000);
}

function paperInput(){
    
    //event listener for Paper
    paper.addEventListener('click',(e)=>{
        if(choice[Math.floor(Math.random()*3)]==="paper"){
            result.innerText="Draw! I also choose Paper";
            moves--;
        }
        else if(choice[Math.floor(Math.random()*3)]==="scissor"){
            result.innerText="Alas! You Lost (I choose scissor)";
            computerScore++;
            moves--;
            
        }
        
        else if(choice[Math.floor(Math.random()*3)]==="rock"){
            result.innerText="Congrats! You Won (I chose rock)";
            playerScore++;
            moves--;
        }
        
    });
    setInterval(checkScore(),1000);
    setInterval(writeScore(),1000);
}

function scissorInput(){
    
    //event listener for scissor
    scissor.addEventListener('click',(e)=>{
        if(choice[Math.floor(Math.random()*3)]==="scissor"){
            result.innerText="Draw! I also choose Scissor";
        }
        else if(choice[Math.floor(Math.random()*3)]==="rock"){
            result.innerText="Alas! You Lost (I choose Rock)";
            
        }
        
        else if(choice[Math.floor(Math.random()*3)]==="paper"){
            result.innerText="Congrats! You Won (I choose Paper)";
            
        }
        
    });
    setInterval(writeScore(),1000);
    setInterval(checkScore(),1000);
}

