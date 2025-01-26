let gameseq=[];
let userseq=[];
let btns=["yellow","red", "green","purple"];
let started=false;
let level=0;
let highscore=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    console.log("game started")
    if(started==false){
        started=true;
        levelup();
    };
    
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function usrFlash(btn){
    btn.classList.add("corr");
    setTimeout(function(){
        btn.classList.remove("corr");
    },250);
}
let body=document.querySelector("body");
function overFlash(body){
    body.classList.add("over");
    setTimeout(function(){
        body.classList.remove("over");
    },250);
}


function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        if(level>highscore){
            highscore=level;
        }
        overFlash(body);        
        h3.innerText=`Game Over! Your score is ${level} Press any key to start, Your Highest level is ${highscore}`;
        reset();
    }
}



function btnPress(){
    let btn=this;
    console.log(this);
    usrFlash(this);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}