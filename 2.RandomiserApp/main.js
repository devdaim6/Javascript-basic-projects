
    var jokes=["Why was the math book sad? Because it had too many problems.","Why couldn't the bicycle stand up by itself? It was two-tired","Why don't scientists trust atoms? Because they make up everything.","Why did the chicken cross the playground? To get to the other slide.","Why don't oysters give to charity? They're shellfish.","What do you call a bear with no teeth? A gummy bear.","Why do elephants never use computers? They're afraid of the mouse.","Why did the cookie go to the doctor? Because it was feeling crumbly." ,"Why did the golfer bring two pairs of pants? In case he got a hole in one.","Why was the belt sent to jail? For holding up the pants.","Why did the banana go to the doctor? Because it wasn't peeling well.","You're not a waste of space, you're just a space that's not being used effectively.","You're not weak, you're just not as strong as you think you are.","You're not a disappointment, you're just a work in progress." ,"You're not bad, you're just not good at being good.","You're not late, you're just fashionably delayed.","You're not a failure, you're just a lesson in progress.","You're not old, you're just chronologically gifted.","You're not lost, you're just taking the scenic route to stupidity.","You're not sure how many problems you have because math is one of them.","You're not great at the advice. Can I interest you in a sarcastic comment?","You're not short, you're just concentrated awesome.","With your creative talents, beautiful spirit and unwavering trustworthiness, you are a true inspiration and a blessing to those around you.","You're not a bad cook, you're just flavor-challenged.","You're not bad at telling jokes, you're just humor-impaired.","Let me Tell you that, You are the embodiment of grace and beauty, a true reflection of loveliness.","You possess a natural charm and elegance that is truly captivating.","You're not lost, you're just taking the scenic route to stupidity.","you know ? Your jokes are worse than a bad hair day, but at least they don't drag on and on","Your jokes are like an ugly sweater, they're not funny and you should probably just throw them away.","You're not single, you're just romantically challenged.","You're not bad at math, you're just using the wrong numbers.","You're not clumsy, you're just gravity-challenged.","Why did the tomato turn red? Because it saw the salad dressing.","You're not arguing, you're just explaining why you're right.","You're not short, you're just concentrated awesome.","You're not lazy, you're just on energy-saving mode.","You're not forgetful, you're just selectively remembering the good stuff.","You're not old, you're just chronologically gifted.","I know! You're not a morning person, you're a coffee person.","You're not broke, you're just temporarily out of funds.","You're not fat, you're just horizontally challenged."];
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
    var randomNumber = Math.floor(Math.random()*num.length);
    var jokesIdx = Math.floor(Math.random()*jokes.length);
    var randomJoke=jokes[jokesIdx];
var visitor=0;
visitor=prompt("Hello Mr./Miss/Mrs , who are you ?");
const head1=document.getElementById("greeting");
head1.innerText="Hello "+visitor+" !";
let head4 = document.getElementById("quote");
   function print(){
   if(visitor==="daim"){
       head4.innerText="I think you might need appreciation for programming me";
    } else {    
        head4.innerText=randomJoke;
        
    }}
    print();
 
   
    if(visitor===null || visitor===0 || visitor===""){
      alert("Enter your Name");

    }
    function randomNum(){
        alert(visitor +"! I think "+ "Lucky Number for you is " + randomNumber);
    }
   
