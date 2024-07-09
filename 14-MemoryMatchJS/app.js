console.log("ok with memery game");
let names = [
  "twitter",
  "twitter",
  "linkedin",
  "linkedin",
  "instagram",
  "instagram",
  "whatsapp",
  "whatsapp",
  "facebook",
  "facebook",
  "youtube",
  "youtube",
];
const container = document.querySelector(".container");
const items = document.querySelectorAll(".items");
const board = [];

//to swap items uniquely every time game loads
let swapping = function (params) {
  for (let i = 0; i < names.length; i++) {
    let swap = Math.floor(Math.random() * names.length);
    // console.log(swap);
    [names[i], names[swap]] = [names[swap], names[i]];
  }
  for (let i = 0; i < names.length; i++) {
    // console.log(items[0]);
    items[i].innerHTML = `<i class="fa-brands fa-${names[i]}"></i>`;
    console.log(items[i].innerHTML);
  }
  //   console.log(names);
};

//for initial transition on every load
// to user able glance at items and then go back to hiding
let transit = function (params) {
  setTimeout(() => {
    items.forEach((element) => {
      element.id = "back";
    });
  }, 1500);
};

// global fn which initiates the whole game
let globalFn = function (params) {
  swapping();
  transit();
};
globalFn();

// when Items get clicked
container.addEventListener("click", function (e) {
  console.log(e.target.id);
  let itemInside = e.target;
  if (itemInside.id == "back") {
    console.log(itemInside.id, "is back");
    itemInside.id = "front";
    // itemInside.innerHTML = `<i class="fa-brands fa-instagram"></i>`;
    setTimeout(() => {
      itemInside.id = "back";
    }, 2000);
  }
});
