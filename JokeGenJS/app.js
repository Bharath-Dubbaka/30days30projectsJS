let newJoke = document.querySelector(".newjoke");
let joke = document.querySelector(".joke");

let apiCall = () => {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse the response data as JSON
      } else {
        throw new Error("API request failed");
      }
    })
    .then((data) => {
      // Process the response data here
      joke.innerHTML = data.joke;
      console.log(data); // Example: Logging the data to the console
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error); // Example: Logging the error to the console
    });
};
apiCall();

newJoke.addEventListener("click", function (params) {
  // let display = document.querySelector(".countDisplay");
  // //   savedCountSel.innerText = [...savedCountSel, display];
  // let div = document.createElement("div");
  // div.innerHTML = display.innerHTML;
  // div.className = "sv";
  // savedCountSel.appendChild(div);
  // console.log(savedCountSel);

  apiCall();
});


