let palindromeInput = document.querySelector(".palindromeInput");
let checker = document.querySelector(".checker");
let clearScreen = document.querySelector(".clearScreen");
let result = document.querySelector(".result");

checker.addEventListener("click", function (params) {
  let res = "IS a Palindrome";
  let string = palindromeInput.value.split(" ").join("");
//   console.log(string);
  // checking if palindrome
  if (string.length > 0) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - (i + 1)]) {
        res = "Not a Palindrome";
      }
    }
    result.innerHTML = res;
  } else {
    alert("Please enter Text");
  }
});

clearScreen.addEventListener("click", function (params) {
  console.log();
  palindromeInput.value = "";
  result.innerHTML = "";
});
