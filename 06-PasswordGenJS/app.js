console.log("working ");

let inputSel = document.querySelector(".fieldsInput");
let submitSel = document.querySelector(".submit");

// nocapsSel.addEventListener("click", function () {
//   console.log(nocapsSel.value);
// });

// inputSel.addEventListener("change", function (e) {
//   // inputSel.value =
//   console.log(e.target.value);
// });

submitSel.addEventListener("click", function (params) {
  console.log(inputSel.value);
  const includeLowercase = document.getElementById("caps").checked;
  const includeUppercase = document.getElementById("nocaps").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const includeNumbers = document.getElementById("numbers").checked;

  let chars = "";
  if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSymbols) chars += "!@#$%&";
  if (includeNumbers) chars += "0123456789";

  let password = "";
  for (let i = 0; i < inputSel.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.querySelector(".fieldsOutput").value = password;
});
