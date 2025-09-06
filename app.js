let timeDisplay = document.querySelector(".timeDisplay");

let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");

let setId = null;
let isStart = false;
let resume = false;

// Start Button Code

start.addEventListener("click", function(){
    if(!isStart){
        isStart = true;
        resume = false
        pause.classList.toggle("display");
        setId = setInterval(changeTime, 10);
    }else{
        res();
        isStart = true;
        resume = false
        setId = setInterval(changeTime, 10);
    }
});

let msec = 0, sec = 0, min = 0;

function changeTime(){
    msec++;
    if(msec==100){
        sec++;
        msec = 0;
        if(sec==60){
            sec = 0;
            min++;
        }
    }
    let str = `${min<10?'0'+min: min} : ${sec<10?'0'+sec: sec} : ${msec<10?'0'+msec: msec}`;
    timeDisplay.innerText = str;
};

// Pause Button code

pause.addEventListener("click", function(){
    resume = !resume;
    start.classList.toggle("hidden");
    reset.classList.toggle("display");
    if(isStart){
        if(resume){
            clearInterval(setId);
        }else{
            setId = setInterval(changeTime, 10);
        }
    }
});

// Reset Button Code
reset.addEventListener("click", function(){
    res();
    start.classList.toggle("hidden");
    pause.classList.toggle("display");
    reset.classList.toggle("display");
});

function res(){
    timeDisplay.innerText = `00 : 00 : 00`;
    msec = 0;
    sec = 0; 
    min = 0;
    clearInterval(setId);
    isStart = false;
}