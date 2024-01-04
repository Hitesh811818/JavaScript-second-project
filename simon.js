let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector(".h2");
let heigest = document.querySelector(".heigest");
let hScore = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Lavel ${level}`

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    
    gameFlash(randBtn);
    console.log(gameSeq);
}

function checkAns(idx) {

    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(function(){
                levelUp();
            },1000)
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level-1}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)

        if(hScore < level){
            hScore = level-1;
            heigest.innerHTML = `Your heigest score is <b>${hScore}</b>`;
        }

        reset();
    }
}

function btnPress() {
    if(started == true){
        let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
