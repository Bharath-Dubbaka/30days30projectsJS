const addNote = document.querySelector(".addNote");
const container = document.querySelector(".container");

addNote.addEventListener("click", function name(params) {
   const item = document.createElement("div");
   item.className = "note items";
   // FOR EDIT ONCLICK UPON A DIV
   item.setAttribute("contenteditable", "true");
   //    Adding date as a opening text in the note
   item.innerHTML = formattedDateFn();
   container.appendChild(item);

   item.style.backgroundColor = "#e3fbd8";
   setTimeout(() => {
      item.style.transitionDuration = "1000ms";
      item.style.backgroundColor = "ghostwhite";
   }, 1000);
});

let formattedDateFn = function (params) {
   const currentDate = new Date();
   console.log(currentDate.getMonth(), "currentDate.getMonth()");
   // Extract Diff date variables
   //    const year = currentDate.getFullYear();
   //    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
   const day = String(currentDate.getDate()).padStart(2, "0");
   const hours = String(currentDate.getHours()).padStart(2, "0");
   const minutes = String(currentDate.getMinutes()).padStart(2, "0");
   //    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

   // To get the day Name of the week
   const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
   //    For Month Number to Name
   const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   const weekday = days[currentDate.getDay()];
   //    Month Data from newDate() is of 0 based, EG: 0 - Jan
   const monthName = months[currentDate.getMonth()];
   // Format the date string
   const formattedDate = `${weekday}, ${monthName}/${day}, ${hours}:${minutes} :::`;
   //    console.log(formattedDate);
   return formattedDate;
};
