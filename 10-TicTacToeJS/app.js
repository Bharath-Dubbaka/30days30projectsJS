console.log("working");

let move = "x";

let box = document.querySelectorAll(".box");
let statusDiv = document.querySelector(".status");
let removeBtn = document.querySelector(".removeBtn");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
console.log(box);
// let onClickFnWithThis = function (elem) {
//   console.log(this, "elem");
//   if (this.textContent == "") {
//     this.textContent = move;
//     if (move == "x") {
//       move = "o";
//     } else move = "x";
//   }
// };

// box.forEach((elem) => {
//   elem.addEventListener("click", onClickFnWithThis);
// });

statusDiv.innerHTML = move;

let onClickFnWithEvent = function (elem) {
  console.log(elem, "elem");
  //if elem has no textContent
  if (elem.textContent == "") {
    elem.textContent = move;
    //reassigning move power accordingly
    if (move == "x") {
      move = "o";
      statusDiv.innerHTML = move;
    } else {
      move = "x";
      statusDiv.innerHTML = move;
    }
    checker();
  }
};
box.forEach((elem) => {
  console.log(elem);
  elem.addEventListener("click", function () {
    onClickFnWithEvent(elem);
  });
});

let checker = function () {
  if (
    box1.textContent == "x" &&
    box2.textContent == "x" &&
    box3.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
  if (
    box4.textContent == "x" &&
    box5.textContent == "x" &&
    box6.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
  if (
    box7.textContent == "x" &&
    box8.textContent == "x" &&
    box9.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
  if (
    box1.textContent == "x" &&
    box4.textContent == "x" &&
    box7.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
  if (
    box2.textContent == "x" &&
    box5.textContent == "x" &&
    box8.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
  if (
    box3.textContent == "x" &&
    box6.textContent == "x" &&
    box9.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }

  if (
    box1.textContent == "x" &&
    box5.textContent == "x" &&
    box9.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
  if (
    box3.textContent == "x" &&
    box5.textContent == "x" &&
    box7.textContent == "x"
  ) {
    statusDiv.innerHTML = "X wins";
  }
};

removeBtn.addEventListener("click", function (params) {
  box.forEach((elem) => {
    console.log(elem);
    elem.textContent = "";
  });
  move = "x";
  statusDiv.innerHTML = move;
});
