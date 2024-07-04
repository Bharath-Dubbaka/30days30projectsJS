let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let lap = document.querySelector(".lap");
let lapBox = document.querySelector(".lapBox");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let stoptimer = true;
let hrs = 0;
let mins = 0;
let secs = 0;

const timer = function (params) {
  console.log("Timer inside");
  if (stoptimer == false) {
    secs = parseInt(secs);
    mins = parseInt(mins);
    hrs = parseInt(hrs);

    secs = secs + 1;
    if (secs > 59) {
      mins = mins + 1;
      secs = 0;
    }
    if (mins > 59) {
      hrs = hrs + 1;
      mins = 0;
      secs = 0;
    }

    if (secs.toString().length < 2) {
      seconds.innerHTML = `0${secs.toString()}`;
    } else {
      seconds.innerHTML = secs;
    }
    if (mins.toString().length < 2) {
      minutes.innerHTML = `0${mins.toString()}`;
    } else {
      minutes.innerHTML = mins;
    }
    if (hrs.toString().length < 2) {
      hours.innerHTML = `0${hrs.toString()}`;
    } else {
      hours.innerHTML = hrs;
    }
    setTimeout(() => {
      timer();
    }, 1000);
  }

  //   function calc() {
  //     setTimeout(() => {}, 2000);
  //   }
  //   calc();
};
// timer();
start.addEventListener("click", function (params) {
  console.log("start clicked");
  if (stoptimer == true) {
    stoptimer = false;
    timer();
  } else if (stoptimer == false) {
    stoptimer = true;
    clearInterval();
  }
});

// stop.addEventListener("click", function (params) {
//   console.log("stop clicked");
// });

reset.addEventListener("click", function (params) {
  console.log("reset clicked");
  stoptimer = true;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  hrs = 0;
  mins = 0;
  secs = 0;
  lapBox.innerHTML = "";
});

lap.addEventListener("click", function (params) {
  let newLap = document.createElement("h3");
  newLap.className = "newLap";
  newLap.innerHTML = `${hours.innerHTML}:${minutes.innerHTML}:${seconds.innerHTML}`;
  lapBox.appendChild(newLap);
});
