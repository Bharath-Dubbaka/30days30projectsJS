let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let plusminus = document.querySelectorAll(".plusminus");
let running = false;
let timeoutID;
console.log(plus);

let plusFn = function (e) {
  let val = e.target.parentElement.previousElementSibling.value;
  val = parseInt(val);
  if (val <= 59) {
    e.target.parentElement.previousElementSibling.value = val + 1;
  }
};
let minusFn = function (e) {
  let val = e.target.parentElement.previousElementSibling.value;
  val = parseInt(val);
  if (val <= 59) {
    e.target.parentElement.previousElementSibling.value = val - 1;
  }
};
let timer = function (params) {
  if (running == true) {
    if (minutes.value <= 0 && seconds.value <= 0 && hours.value <= 0) {
      running = false;
      // seconds.value = 0;
      clearTimeout();
      alert("CountDown Completed");
    } else {
      timeoutID = setTimeout(() => {
        console.log(seconds.value);
        seconds.value = seconds.value - 1;
        if (seconds.value <= 0 && minutes.value > 0) {
          seconds.value = 59;
          minutes.value = minutes.value - 1;
        }
        if (minutes.value <= 0 && seconds.value <= 0 && hours.value > 0) {
          seconds.value = 59;
          minutes.value = 59;
          hours.value = hours.value - 1;
        }
        timer();
      }, 1000);
    }
  }
};

plus.forEach((element) => {
  element.addEventListener("click", plusFn);
});
minus.forEach((element) => {
  element.addEventListener("click", minusFn);
});

start.addEventListener("click", function (params) {
  console.log(seconds.value);
  if (minutes.value <= 0 && seconds.value <= 0 && hours.value <= 0) {
    alert("enter some time");
  } else if (running == false) {
    running = true;
    timer();
  } else if (running == true) {
    running = false;
  }
});

reset.addEventListener("click", function (params) {
  console.log("runiing resrt");
  running = false;
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
  clearTimeout(timeoutID);
});
