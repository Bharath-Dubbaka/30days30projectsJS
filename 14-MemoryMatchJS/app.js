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
// const front = document.querySelectorAll(".front");
const board = [];
let previousShownCard = undefined;
// console.log(items)

//TO swap items uniquely every time game loads
let swapping = function (params) {
   for (let i = 0; i < names.length; i++) {
      let swap = Math.floor(Math.random() * names.length);
      [names[i], names[swap]] = [names[swap], names[i]];
   }
   for (let i = 0; i < names.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                    <div class="front">
                        <i class="fa-brands fa-${names[i]}"></i>
                    </div>
                    <div class="back">
                        <i class="fa-solid fa-rotate"></i>
                    </div>`;
      card.addEventListener("click", () => {
         //   console.log("Card clickes", card.classList[1]);
         if (!card.classList.contains("show")) {
            card.classList.add("show");
            // console.log(
            //   card.firstElementChild.firstElementChild.classList,
            //   "CLASS LIST"
            // );
            card.firstElementChild.style.display = "flex";
            card.lastElementChild.style.display = "none";
            if (!previousShownCard) {
               previousShownCard = card;
               //   console.log(previousShownCard, "previouscard");
               //   console.log(card.querySelector("i").classList[1]);
            } else {
               // WE ARE TARGETING SVGs present INSIDE CARD ELEMENT
               // BCZ FONT AWESOME AUTOMATICALLY CHANGES ICONS INTO SVGs
               const iconOne =
                  previousShownCard.querySelector("svg").classList[1];
               const iconTwo = card.querySelector("svg").classList[1];
               console.log(iconOne, iconTwo, "icon one and two");
               if (iconOne !== iconTwo) {
                  const temp = previousShownCard;
                  setTimeout(() => {
                     temp.classList.remove("show");
                     card.classList.remove("show");
                     card.firstElementChild.style.display = "none";
                     card.lastElementChild.style.display = "flex";
                     temp.firstElementChild.style.display = "none";
                     temp.lastElementChild.style.display = "flex";
                  }, 1000);
               }
               previousShownCard = undefined;
            }
         }
      });
      items[i].appendChild(card);
   }
   // console.log(names);
};

//FOR initial transition on every load
// TO user able glance at items and then go back to hiding
let transit = function (params) {
   setTimeout(() => {
      items.forEach((element) => {
         element.firstElementChild.firstElementChild.style.display = "none";
         element.firstElementChild.lastElementChild.style.display = "flex";
         element.style.transform = `rotateY(360deg)`;

         element.style.transition = "300ms";
      });
   }, 1500);
};

// GLOBAL FN which initiates the whole game
let globalFn = function (params) {
   swapping();
   transit();
};
globalFn();

// WHEN Items get clicked
// container.addEventListener("click", function (e) {
//   let itemInside = e.target.classList;
//   console.log(itemInside);
//   //   if (itemInside.id == "back") {
//   //     console.log(itemInside.id, "is back");
//   //     itemInside.id = "front";
//   //     // itemInside.innerHTML = `<i class="fa-brands fa-instagram"></i>`;
//   //     setTimeout(() => {
//   //       itemInside.id = "back";
//   //     }, 2000);
//   //   }
// });
