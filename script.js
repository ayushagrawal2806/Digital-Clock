let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");


let date = new Date();
let hours = date.getHours() % 12;
let minutes = date.getMinutes();
let seconds = date.getSeconds();
hours < 10 ? hour.innerText = "0" + hours : hour.innerText = hours;
minutes<10 ? minute.innerText = "0" + minutes : minute.innerText = minutes;
seconds < 10 ? second.innerText = "0" + seconds : second.innerText =  seconds;

setInterval(() =>{
    seconds++;
    seconds < 10 ? second.innerText = "0" + seconds : second.innerText =  seconds;
    if(second.innerText === "60"){
        second.innerText = "00";
        seconds = 0;
        minutes++;
        minutes<10 ? minute.innerText = "0" + minutes : minute.innerText = minutes;
    }

    if(minute.innerText === "60"){
        minute.innerText = "00";
        minutes = 0; 
        hours++;
        hours < 10 ? hour.innerText = "0" + hours :  hour.innerText = hours;
    }

    if(hour.innerText === "13"){
        hours = 1;
        hours < 10 ? hour.innerText = "0" + hours :  hour.innerText = hours;
        if(document.querySelector("p").innerText === "PM"){
            document.querySelector("p").innerText = "AM"
        }
        else{
            document.querySelector("p").innerText = "PM"
        }
    }
  

    
} , 1000)