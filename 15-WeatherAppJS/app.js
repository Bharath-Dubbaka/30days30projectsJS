const APIkey = "808f181ea900d920ac10cc09fab3ddeb";
const urlBase2 = `https://api.openweathermap.org/data/2.5/weather`;

// let input = document.querySelector("#input");
let button = document.querySelector("#button");
let details = document.querySelector(".details");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

let apiCall = async function (params) {
   const city = document.getElementById("input");
   const cityName = city.value;
   console.log(urlBase2);
   const response = await fetch(
      `${urlBase2}?q=${cityName}&appid=${APIkey}&units=metric`
   );
   const data = await response.json();
   console.log(data, "data");
   dataCall(data);
};

let dataCall = function (data) {
   let description = data.weather[0].main;
   let name = data.name;
   let temp = Math.round(data.main.temp);
   //  let date = new Date().toLocaleString("en-US", {
   //     timeZone: "America/New_York",
   //  });
   let tempMax = Math.ceil(data.main.temp_max);
   let tempMin = Math.floor(data.main.temp_min);
   let box = ` <div class="inner">
         <div class="name">${name},${data.sys.country}</div>
         <div class="temp">${temp}'C</div>
         <div class="description">${description}, ${data.weather[0].description}</div>
         <div class="tempMaxMin">${tempMax}'C (Max) ${tempMin}'C (Min) </div>
         <div class="temp"></div>
      </div>`;
   // details.appendChild(box);
   details.innerHTML = box;
   three.innerHTML = `<div>${data.main.pressure} - Pressure</div>`;
   two.innerHTML = `<div>${data.wind.speed} - Speed</div>`;
   one.innerHTML = `<div>${data.main.humidity}% - Humidity</div>`;
};

button.addEventListener("click", function (params) {
   //  console.log(input.value);
   //  city = input.value;
   apiCall();
});
