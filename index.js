
const hourElem = document.getElementById("hour");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");
const dayElem = document.getElementById("day");
const dateElem = document.getElementById("date");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    let day = new Date().getDay();
    let y = new Date().getFullYear();
    let mon = new Date().getMonth();
    let d = new Date().getDate();
    
    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m :m;
    s = s<10 ? "0" + s :s;

    hourElem.innerText = h;
    minutesElem.innerText = m;
    secondsElem.innerText = s;
    ampmElem.innerText = ampm;
    switch(mon){
        case 0: 
        mon= "January";
            break;
        case 1: 
        mon= "February";
            break;
        case 2: 
        mon= "March";
            break;
        case 3: 
        mon= "April";
            break;
        case 4: 
        mon= "May";
            break;
        case 5: 
        mon= "June"; 
            break;
        case 6: 
        mon= "July";
            break;
        case 7: 
        mon= "August";
            break;
        case 8: 
        mon= "September";
            break;
        case 9: 
        mon= "October";
            break;
        case 10: 
        mon= "November";
            break;
        case 11: 
        mon= "December";
            break;
        }    
    dateElem.innerText = `${mon} ${d}, ${y}`;
    switch(day){
        case 0:
            dayElem.innerText = "Sunday";
            break;
        case 1:
            dayElem.innerText = "Monday";
            break;
        case 2:
            dayElem.innerText = "Tuesday";
            break;
        case 3:
            dayElem.innerText = "Wednesday";
            break;
        case 4:
            dayElem.innerText = "Thursday";
            break;
        case 5:
            dayElem.innerText = "Friday";
            break;
        case 6:
            dayElem.innerText = "Saturday";
    }
    
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock();