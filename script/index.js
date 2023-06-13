const secondsCard = document.querySelector(".SECONDS")
const secondsCardFront = document.querySelector(".SECONDS_front")
const secondsCardBack = document.querySelector(".SECONDS_back")

const minutesCard = document.querySelector(".MINUTES")
const minutesCardFront = document.querySelector(".MINUTES_front")
const minutesCardBack = document.querySelector(".MINUTES_back")

const flipMin = document.querySelector(".flip.min")

const hoursCard = document.querySelector(".HOURS"); 
const hoursCardFront = document.querySelector(".HOURS_front")
const hoursCardBack = document.querySelector(".HOURS_back")

const daysCard = document.querySelector(".DAYS") 
const daysCardFront = document.querySelector(".DAYS_front")
const daysCardBack = document.querySelector(".DAYS_back")



let currentDate = new Date();

let currentDay = currentDate.getDay()+1;
let currentHour = currentDate.getHours();
let currentMins = currentDate.getMinutes();
let currentSec = currentDate.getSeconds();

minutesCard.textContent = currentMins
minutesCardFront.textContent = currentMins;
minutesCardBack.textContent = currentMins

hoursCard.textContent = currentHour
hoursCardFront.textContent = currentHour;
hoursCardBack.textContent = currentHour;

daysCard.textContent = currentDay
daysCardFront.textContent = currentDay;
daysCardBack.textContent = currentDay;

let timeInSeconds = (currentDay * 24 * 60 * 60)+(currentHour * 60 * 60)+(currentMins * 60)+currentSec;





function showTime(){
    
    let day = Math.floor(timeInSeconds / (24 * 60 * 60));
    let hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    
    secondsCard.textContent = seconds;
    secondsCardFront.textContent = seconds
    secondsCardBack.textContent = seconds


    if(minutesCard.textContent != minutes){
        minutesCard.textContent = minutes
        minutesCardFront.textContent = minutes;
        minutesCardBack.textContent = minutes

        if(flipMin.classList.contains("up")){
            flipMin.setAttribute("class","flip min down")
        }else{
            flipMin.setAttribute("class", "flip min up")
        }
    }


    hoursCard.textContent=hours
    hoursCardFront.textContent = hours;
    hoursCardBack.textContent = hours

    
    daysCard.textContent= day
    daysCardFront.textContent = day;
    daysCardBack.textContent = day;
    
    timeInSeconds--
}
setInterval(showTime, 1000)


const flipSec = document.querySelector(".flip.sec")



function secondsTicTac(){
    if(flipSec.classList.contains("up")){
        flipSec.setAttribute("class","flip down")
    }else{
        flipSec.setAttribute("class", "flip up")
    }
}
setInterval(secondsTicTac, 600)