let plusSel = document.querySelector(".plus");
let minusSel = document.querySelector(".minus");
let saveSel = document.querySelector(".save");
let resetSel = document.querySelector(".reset");
let savedCountSel = document.querySelector(".savedCount");

// console.log(display);

plusSel.addEventListener("click", function (params) {
  let display = document.querySelector(".countDisplay");
  let val = Number(display.innerHTML);
  val++;
  let sval = val.toString();
  display.innerHTML = sval;
  console.log(typeof sval, sval);
});

minusSel.addEventListener("click", function (params) {
  let display = document.querySelector(".countDisplay");
  let val = Number(display.innerHTML);
  val--;
  let sval = val.toString();
  display.innerHTML = sval;
  console.log(typeof sval, sval);
});

resetSel.addEventListener("click", function (params) {
  let display = document.querySelector(".countDisplay");
  display.innerHTML = 0;
});

saveSel.addEventListener("click", function (params) {
  let display = document.querySelector(".countDisplay");
  //   savedCountSel.innerText = [...savedCountSel, display];
  let div = document.createElement("div");
  div.innerHTML = display.innerHTML;
  div.className = "sv";
  savedCountSel.appendChild(div);
  console.log(savedCountSel);
});
