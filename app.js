let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];  //we choose random index 

let started = false;   // abhi game start ni hoa
let level = 0;

let h2 = document.querySelector("h2");

let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

let heighScore = 0;

document.addEventListener("keypress", function(){
    if(started == false){                         //started ki value keypress hony ky baad bhi false hai tou started = true , game 1 time started 
        console.log("game Started");
        started = true;
    }
    
    levelUp();        //function call
});



function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML = `level ${level}`;

    //random btn choose
    let randIdx = Math.floor( Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameFlash(randBtn);
}

function checkAns(idx){
    console.log(`current level : ${level}`);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Press any key to start again`;
        h3.innerHTML = `Your Score : &nbsp;  <b>  ${level+4-2} </b>  `;
        h4.innerHTML =  `Heighest Score : &nbsp;  <b>  ${heightestScore()} </b> `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor = "aliceblue";  
        }, 150);
        
        reset();
    }
}

function heightestScore(){

    let currentScore = level+4-2;
    if(currentScore > heighScore){
        heighScore = currentScore;
        return heighScore;
    } else{
        currentScore = heighScore;
        return currentScore;
    }
    
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];

    level = 0;
}


function btnPress(){   
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

// MEDIA QURIES ----

function myFunction(x) {
    if (x[0].matches) { // If media query matches
        let button = document.createElement("button");
        button.innerText = "Click to Start Game";
        button.classList.add("mqBtn");
        document.querySelector("body").append(button);
        
        h2.innerText = "Click Button start the Game!";
        button.addEventListener("click", function(){
            if(started == false){                        
                console.log("game Started");
                started = true;
            }
            
            levelUp();   
        });
    } 
    if (x[1].matches) { // If media query matches
        let button = document.createElement("button");
        button.innerText = "Click to Start Game";
        button.classList.add("mqBtn");
        document.querySelector("body").append(button);
        
        h2.innerText = "Click Button start the Game!";
        button.addEventListener("click", function(){
            if(started == false){                        
                console.log("game Started");
                started = true;
            }
            
            levelUp();   
        });
    } 
}
  
let x = [window.matchMedia("(max-width: 390px)"), 
        window.matchMedia("(max-width: 414px)")
];

myFunction(x); // Call listener function at run time

