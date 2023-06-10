const DAYS =  document.querySelector(".DAYS")
const HOURS =  document.querySelector(".HOURS")
const MINUTES =  document.querySelector(".MINUTES")
const SECONDS =  document.querySelector(".SECONDS")

SECONDS.textContent = (new Date).getSeconds();
MINUTES.textContent = (new Date).getMinutes();
HOURS.textContent = (new Date).getHours();
DAYS.textContent= (new Date).getDay();

function showTime() {
    const now = new Date()
    let seconds = now.getSeconds();
    SECONDS.textContent = seconds;
    
    let mins = now.getMinutes();
    const min__folder = MINUTES.nextElementSibling;

    const currentState_min = min__folder.getAttribute("data-state")

    if(MINUTES.textContent != mins){

        if (currentState_min === "up") {

            min__folder.setAttribute("data-state", "down");
            
            setTimeout(()=>{
                min__folder.setAttribute("data-state", "up");
            },500)

        }
        MINUTES.textContent = mins
    }
    
    let hour = now.getHours();
    HOURS.textContent = hour;
    
    let days = now.getDay();
    DAYS.textContent= days;
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