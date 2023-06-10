const DAYS =  document.querySelector(".DAYS")
const HOURS =  document.querySelector(".HOURS")
const MINUTES =  document.querySelector(".MINUTES")
const SECONDS =  document.querySelector(".SECONDS")

SECONDS.textContent = (new Date()).getSeconds();
MINUTES.textContent = (new Date()).getMinutes();
HOURS.textContent = (new Date()).getHours();
DAYS.textContent= (new Date()).getDay();


// Convert the duration to seconds
let durationInSeconds = (( (new Date()).getDay() ) * 24 * 60 * 60) + (( (new Date()).getHours() ) * 60 * 60) + (( (new Date()).getMinutes() ) * 60) + ( (new Date()).getSeconds() );
console.log(durationInSeconds)


function showTime() {

    let day = Math.floor(durationInSeconds / (24 * 60 * 60));
    DAYS.textContent=day
    
    let hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
    HOURS.textContent = hours;
    
    let minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
        const min__folder = MINUTES.nextElementSibling;
        const currentState_min = min__folder.getAttribute("data-state")

        if(MINUTES.textContent != minutes){

            if (currentState_min === "up") {

                min__folder.setAttribute("data-state", "down");

                setTimeout(()=>{
                    min__folder.setAttribute("data-state", "up");
                },500)

            }

            MINUTES.textContent = minutes;
        }

    let seconds = Math.floor(durationInSeconds % 60);
    SECONDS.textContent= seconds

    durationInSeconds--
    
}

setInterval(showTime, 1000);


function folders(){
    const sec_folder= SECONDS.nextElementSibling
    const currentState_sec = sec_folder.getAttribute("data-state");
    if (currentState_sec === "down") {
        sec_folder.setAttribute("data-state", "up");
    } else {
        sec_folder.setAttribute("data-state", "down");
    }

    const min__folder = MINUTES.nextElementSibling;
    const currentState_min = min__folder.getAttribute("data-state")
}

setInterval( folders, 500)