const APIkey = "808f181ea900d920ac10cc09fab3ddeb";

const limit = 5;
let lat = "17.4065";
let lon = "78.4772";
// const link = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${APIkey}`;
const urlBase = `https://api.openweathermap.org/data/2.5/weather?q=goa&appid=${APIkey}`;
const urlBase2 = `https://api.openweathermap.org/data/2.5/weather`;

// let input = document.querySelector("#input");
let button = document.querySelector("#button");
let details = document.querySelector(".details");

let apiCall = async function (params) {
   const city = document.getElementById("input");
   const cityName = city.value;
   console.log(urlBase2);
   const response = await fetch(`${urlBase2}?q=${cityName}&appid=${APIkey}`);
   const data = await response.json();
   console.log(data, response, "data ^ response");
   dataCall(data);
   //  fetch(urlBase2)
   //     .then((response) => {
   //        response.json();
   //     })
   //     .then((data) => {
   //        let newdata = data;
   //        dataCall(newdata);
   //     })
   //     .catch((err) => {
   //        console.log(err);
   //     });
};

let dataCall = function (data) {
   console.log(data.weather[0].description);
   details.innerHTML = "";
   details.innerHTML = data.weather[0].description;
};

button.addEventListener("click", function (params) {
   //  console.log(input.value);
   //  city = input.value;
   apiCall();
});
