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
swapping();

let transit = function (params) {
  setTimeout(() => {
    items.forEach((element) => {
      element.id = "back";
    });
  }, 1500);
};
transit();

container.addEventListener("click", function (e) {
  console.log(e.target.id);
  let itemInside = e.target;

  //   if (itemInside.classList.contains("items")) {
  //     console.log("inside contains items");

  if (itemInside.id == "back") {
    console.log(itemInside.id, "is back");
    itemInside.id = "front";
    // itemInside.innerHTML = `<i class="fa-brands fa-instagram"></i>`;
    setTimeout(() => {
      itemInside.id = "back";
      //   itemInside.innerHTML = "100";
    }, 2000);
  }

  //   else if (itemInside.id == "back") {
  //     console.log(itemInside.id, "is back");
  //     itemInside.id = "front";
  //     itemInside.innerHTML = "100";
  //   }

  // itemInside.style.color = "red";
  // itemInside.style.transform = `rotateY(360deg)`;
  // itemInside.style.transitionDuration = "500ms";
  // itemInside.style.fontSize = "2.5rem";
  // itemInside.style.backgroundColor = "white";
  // itemInside.style.color = "#154751";
  //   }
  //   e.preventDefault();
});
