const dob = document.getElementById("dob");
const btn = document.querySelector(".btn");
// const mistakesDiv = document.querySelector(".mistakesDiv");
// const reset = document.querySelector(".reset");
// const text = document.querySelector(".text");
// const wpmDiv = document.querySelector(".wpmDiv");

btn.addEventListener("click", function (params) {
   console.log(dob.value);
   let enteredDOB = dob.value;
   let dateToday = new Date().getDate();
   // 0 indexed for months
   let monthToday = new Date().getMonth();
   let yearToday = new Date().getFullYear();
   console.log(dateToday, monthToday, yearToday);
});


