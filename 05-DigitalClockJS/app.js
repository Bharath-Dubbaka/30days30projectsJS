const timeInputHrs = document.querySelector(".timeInputHrs");
const timeInputMins = document.querySelector(".timeInputMins");
const timeInputSecs = document.querySelector(".timeInputSecs");
const timeInputAMPM = document.querySelector(".timeInputAMPM");
function updateTime() {
  let hours = new Date().getHours();
  if (hours > 12) {
    timeInputHrs.innerHTML = `0${hours - 12}`;
    timeInputAMPM.innerHTML = "PM";
  } else {
    timeInputHrs.innerHTML = new Date().getHours();
    timeInputAMPM.innerHTML = "AM";
  }
  if (hours.toString().length < 2) {
    timeInputHrs.innerHTML = `0${hours}`;
  } else {
    timeInputHrs.innerHTML = hours;
  }

  let mins = new Date().getMinutes();
  if (mins.toString().length < 2) {
    timeInputMins.innerHTML = `0${mins}`;
  } else {
    timeInputMins.innerHTML = mins;
  }
  let secs = new Date().getSeconds();
  if (secs.toString().length < 2) {
    timeInputSecs.innerHTML = `0${secs}`;
  } else {
    timeInputSecs.innerHTML = secs;
  }
}

setInterval(() => {
  updateTime();
}, 500);

// let len = new Date().getSeconds();
// console.log(len.toString().length);
// console.log(new Date().getMinutes());
// console.log(new Date());
