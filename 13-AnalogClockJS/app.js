console.log("countdown");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

console.log(new Date().getHours());

let timer = function (params) {
  setInterval(() => {
    let d = new Date();
    let hoursTime = d.getHours();
    let minutesTime = d.getMinutes();
    let secondsTime = d.getSeconds();
    let rotateSeconds = secondsTime * 6;
    let rotateMinutes = minutesTime * 6;
    let rotateHours = hoursTime * 30 + minutesTime / 2;
    console.log("r secs", rotateSeconds, secondsTime);
    console.log("r minutes", rotateMinutes, minutesTime);
    console.log("r hoyrs", rotateHours, hoursTime);
    seconds.style.transform = `rotate(${rotateSeconds}deg)`;
    minutes.style.transform = `rotate(${rotateMinutes}deg)`;
    hours.style.transform = `rotate(${rotateHours}deg)`;
  }, 1000);
  console.log(hours);
};
timer();
