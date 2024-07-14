const addNote = document.querySelector(".addNote");
const container = document.querySelector(".container");
console.log(container);
addNote.addEventListener("click", function name(params) {
   console.log("clicked");
   const items = document.querySelectorAll(".items");

   const item = document.createElement("div");
   item.className = "note items";
   // FOR EDIT ONCLICK UPON A DIV
   item.setAttribute("contenteditable", "true");

   container.appendChild(item);
   console.log(items);
});



