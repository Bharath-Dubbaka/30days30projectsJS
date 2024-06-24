console.log("wokring");
let boxVal = document.querySelectorAll(".box");
let frshBtn = document.querySelector(".refresh");
// console.log(boxVal);

let boxesVal = function () {
  boxVal.forEach(function (individual) {
    //   console.log(individual.style.backgroundColor = "red");
    let extracted = getRandomColor();
    individual.style.backgroundColor = extracted;
    individual.innerHTML = extracted;
    individual.addEventListener("click", function (params) {
      navigator.clipboard.writeText(individual.innerHTML);
      //   console.log("clicked");
      alert(`copied to clipboard`);
    });
  });
};
boxesVal();

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

frshBtn.addEventListener("click", function () {
  boxesVal();
  //   console.log("clickws");
});
