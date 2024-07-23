import { quizOneQ } from "../questions.js";

const rulesMain = document.querySelector(".rulesMain");
const questionsMain = document.querySelector(".questionsMain");
const iUnderstandBtn = document.querySelector(".iUnderstandBtn");
const questionWrap = document.querySelector(".questionWrap");
const optionsWrap = document.querySelector(".optionsWrap");

let showOptions = function (num) {
   console.log(quizOneQ);
   questionWrap.innerHTML = quizOneQ[num].question;
   quizOneQ[num].options.forEach((opt) => {
      let options = document.createElement("button");
      options.innerHTML = `${opt}`;
      //   let options = `<button>${opt}</button>`;
      optionsWrap.appendChild(options);
   });
};

iUnderstandBtn.addEventListener("click", function (params) {
   rulesMain.classList.add("inActiveTab");
   rulesMain.classList.remove("activeTab");

   questionsMain.classList.add("activeTab");
   questionsMain.classList.remove("inActiveTab");
   showOptions(0);
   //    quesCounter(1);
   //    startTimer(30);
   //    startTimerLine(0);
});
