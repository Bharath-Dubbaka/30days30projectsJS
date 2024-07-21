const dob = document.getElementById("dob");
const btn = document.querySelector(".btn");
const daysOutput = document.querySelector(".daysOutput");
const monthsOutput = document.querySelector(".monthsOutput");
const yearsOutput = document.querySelector(".yearsOutput");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const mistakesDiv = document.querySelector(".mistakesDiv");
// const reset = document.querySelector(".reset");
// const text = document.querySelector(".text");
// const wpmDiv = document.querySelector(".wpmDiv");

btn.addEventListener("click", function (params) {
   let enteredDOBarray = dob.value.split("-");
   let enteredYear = enteredDOBarray[0];
   let enteredMonth = enteredDOBarray[1];
   let enteredDay = enteredDOBarray[2];

   let todayDate = new Date().getDate();
   // remember that getMonth() is 0 indexed jan will 0, feb will 1
   let todayMonth = new Date().getMonth();
   // so we are adding 1 bcz itwas 0 indexed later remember
   // to do -1 if you want to search for noOfDays in months Arrays created
   todayMonth++;
   let todayYear = new Date().getFullYear();
   // Calculating years
   let calcYear = todayYear - enteredYear;
   let calcMonth;
   let calcDay;
   // Calculating months
   if (todayMonth >= enteredMonth) {
      calcMonth = todayMonth - enteredMonth;
   } else {
      calcYear--;
      // doing 12+ so we can adjust the negative value
      calcMonth = 12 + todayMonth - enteredMonth;
      console.log(calcMonth, "calcMonth");
   }
   // Calculating days
   if (todayDate >= enteredDay) {
      calcDay = todayDate - enteredDay;
   } else {
      calcMonth--;
      // console.log(calcMonth, "calcMonth if > after --");
      let calc = todayDate - enteredDay;
      console.log(calcMonth, calc, todayDate, enteredDay, months[calcMonth]);
      // we are doing + calc bcz (9 - -2) = 11
      // we are doing todayMonth - 2 bcz we already added +1 to todayMonth
      // which was originally 0 index and as the we need to backtrack one month so intotal -2 in array
      calcDay = months[todayMonth - 2] + calc;
      // so that month doesn't go negative, eg if month was 0 and we do calcMonth-- it will be -1
      if (calcMonth < 0) {
         calcMonth = 11;
         calcYear--;
      }
   }
   monthsOutput.innerHTML = calcMonth;
   yearsOutput.innerHTML = calcYear;
   daysOutput.innerHTML = calcDay;
   // console.log(enteredDOBarray);
   // console.log(todayDate, todayMonth, todayYear);
});
