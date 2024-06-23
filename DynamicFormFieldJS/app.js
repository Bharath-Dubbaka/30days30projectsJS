const generateSelect = document.querySelector(".generate");
let fieldsSel = document.querySelector(".fields");
let removeSelect = document.querySelector(".remove");
// console.log(fieldsSel.lastChild.remove());

generateSelect.addEventListener("click", function (params) {
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Text";
  input.className = "field";
  console.log(input);
  fieldsSel.appendChild(input);
  console.log(fieldsSel);
});

removeSelect.addEventListener("click", function (params) {
  console.log(fieldsSel);

  fieldsSel.lastElementChild.remove();
  console.log(fieldsSel);
});
