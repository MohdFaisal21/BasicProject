let timeDisplay = document.querySelector(".timeDisplay");

let start = document.querySelector(".start");

let setId = null;
let isStart = false;
let resume = false;
start.addEventListener("click", function(){
    if(!isStart){
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
let pause = document.querySelector(".pause");

pause.addEventListener("click", function(){
    resume = !resume;
    if(isStart){
        if(resume){
            clearInterval(setId);
        }else{
            setId = setInterval(changeTime, 10);
        }
    }
        
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", function(){
    timeDisplay.innerText = `00 : 00 : 00`;
    msec = 0;
    sec = 0; 
    min = 0;
    clearInterval(setId);
    isStart = false;
});

if(!isStart)  clearInterval("setId");