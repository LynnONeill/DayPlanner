$(document).ready(function(){

let today = new Date();

let curYear = today.getFullYear();
let curMonth = today.getMonth();
let curDate = today.getDate();
let curDay = today.getDay();
let curHour = today.getHours();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function showCurrentDate() {
    curMonth = (months[curMonth]);
    curDay = (days[curDay]);
    $("#currentDay").text(curDay + ", " + curMonth + " " + curDate + ", " + curYear);
}

showCurrentDate();


// This function will gray out all blocks that are in the past and turn current hour block red //

$(".textarea").each(function () {
    let dataHour = $(this).attr("data-hour");
    if (dataHour == curHour) {
        $(this).addClass("present");
    } else if (dataHour < curHour) {
        $(this).addClass("past");
    }

});
//This will pull data out of local storage and put it back into the appropriate input fields //
for (let i = 0; i < 24; i++) {
    let savedEvent = localStorage.getItem("description" + i);
    $("#description"+i).val(savedEvent);
}


// This  save information to local storage. //

    $(".saveBtn").on("click", function () {
       let dataHour = $(this).attr("data-hour");
       let description = $("#description"+dataHour).val();
       localStorage.setItem("description"+dataHour, description)
    })
})