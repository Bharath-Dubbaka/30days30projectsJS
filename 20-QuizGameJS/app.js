// const context = document.querySelector("#context");
// const timer = document.querySelector(".timer");
// const mistakesDiv = document.querySelector(".mistakesDiv");
// const reset = document.querySelector(".reset");
// const text = document.querySelector(".text");
const quizBtnOne = document.querySelector("#quizBtnOne");
const quizBtn = document.querySelectorAll(".quizBtn");

quizBtn.forEach((btn) => {
   console.log(`quizes/${btn.id}`);

   btn.addEventListener("click", function (params) {
      window.location = `quizes/${btn.id}.html`;
   });
});
console.log(quizBtn);
