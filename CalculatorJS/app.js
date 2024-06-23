console.log("working ");
//Incase you want to make any changes to CHROME EXTENSION please add MANIFEST>JSON
// AND UN - COMMENT THE CSS ALREADY ADDED for EXT in css file with comments above them

//queryies
const inputVal = document.querySelector(".inputval");

const resetBtn = document.querySelector(".resetbtns");

const isEqualBtn = document.querySelector(".isequalbtn");

const isBtn = document.querySelectorAll(".btns");

//adding event listners to all selectors and adding values to the display/input
isBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    inputVal.value += btn.innerHTML;
  });
});
//or
// const plusBtn = document.querySelector(".plusbtns");
// const divideBtn = document.querySelector(".dividebtns");
// const multiplyBtn = document.querySelector(".multiplybtns");
// const minusBtn = document.querySelector(".minusbtns");
// const oneBtn = document.querySelector(".onebtns");
// const twoBtn = document.querySelector(".twobtns");
// const threeBtn = document.querySelector(".threebtns");
// const fourBtn = document.querySelector(".fourbtns");
// const fiveBtn = document.querySelector(".fivebtns");
// const sixBtn = document.querySelector(".sixbtns");
// const sevenBtn = document.querySelector(".sevenbtns");
// const eightBtn = document.querySelector(".eightbtns");
// const nineBtn = document.querySelector(".ninebtns");
// const zeroBtn = document.querySelector(".zerobtns");
// const dotBtn = document.querySelector(".dotbtns");

// console.log(resetBtn);

//display related
// let appendToDisplay = function (param1) {
//   // let text1 = inputVal.value;
//   // let text2 = param1;
//   // let result = text1.concat(text2);
//   // inputVal.value += result;
//   inputVal.value += param1;
// };

resetBtn.addEventListener("click", function () {
  inputVal.value = "";
});

// eventlisteners
// const plusVal = plusBtn.addEventListener("click", function () {
//   appendToDisplay(plusBtn.innerHTML);
// });
// const minusVal = minusBtn.addEventListener("click", function () {
//   appendToDisplay(minusBtn.innerHTML);
// });
// const divideVal = divideBtn.addEventListener("click", function () {
//   appendToDisplay(divideBtn.innerHTML);
// });
// const multiplyVal = multiplyBtn.addEventListener("click", function () {
//   appendToDisplay(multiplyBtn.innerHTML);
// });
// const oneVal = oneBtn.addEventListener("click", function () {
//   appendToDisplay(oneBtn.innerHTML);
// });
// const twoVal = twoBtn.addEventListener("click", function () {
//   appendToDisplay(twoBtn.innerHTML);
// });
// const threeVal = threeBtn.addEventListener("click", function () {
//   appendToDisplay(threeBtn.innerHTML);
// });
// const fourVal = fourBtn.addEventListener("click", function () {
//   appendToDisplay(fourBtn.innerHTML);
// });
// const fiveVal = fiveBtn.addEventListener("click", function () {
//   appendToDisplay(fiveBtn.innerHTML);
// });
// const sixVal = sixBtn.addEventListener("click", function () {
//   appendToDisplay(sixBtn.innerHTML);
// });
// const sevenVal = sevenBtn.addEventListener("click", function () {
//   appendToDisplay(sevenBtn.innerHTML);
// });
// const eightVal = eightBtn.addEventListener("click", function () {
//   appendToDisplay(eightBtn.innerHTML);
// });
// const nineVal = nineBtn.addEventListener("click", function () {
//   appendToDisplay(nineBtn.innerHTML);
// });
// const zeroVal = zeroBtn.addEventListener("click",
//   function () {
//   appendToDisplay(zeroBtn.innerHTML);
// }
// );

//isEqual
const isEqualVal = isEqualBtn.addEventListener("click", function () {
  //error handling
  try {
    inputVal.value = eval(inputVal.value);
  } catch (error) {
    inputVal.value = "Error";
  }
});
