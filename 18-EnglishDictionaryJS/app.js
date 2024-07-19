console.log("English Dictionary");

let urlBase = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const inputEng = document.querySelector(".inputEng");
const convertBtn = document.querySelector(".convertBtn");
const results = document.querySelector(".results");

// let voice = document.querySelector("#voice_word").innerText

let onClickConvert = (params) => {
   console.log(inputEng.value);
   console.log(`${urlBase}${inputEng.value}`, "`${urlBase}${inputEng.value}`");
   const callAPI = async function (params) {
      const response = await fetch(`${urlBase}${inputEng.value}`);
      const data = await response.json();
      APIfn(data);
   };
   callAPI();
   //    APIfn();
};
convertBtn.addEventListener("click", onClickConvert);

let APIfn = function (data) {
   console.log(data[0].meanings[0].definitions[0], "data");
   let defs = data[0].meanings[0].definitions[0].definition;
   let defs2 = data[0].meanings[0].definitions[1].definition;
   //    defs.forEach((defs) => {
   console.log(defs);
   //   const item = `<div className="items">{defs.definition}</div>`;
   //    const item = document.createElement("div");
   //    item.className = "item";
   //    item.innerHTML = defs;
   //    results.innerHTML = "";
   //    results.appendChild(item);
   console.log(data[0], "hdhfh");
   //    document.querySelector("#voice_word").innerText = data[0].word;
   document.querySelector(
      "#example"
   ).innerHTML = `${data[0].word}, ${data[0].phonetic}`;
   document.querySelector("#def").innerHTML = `${defs}`;

   document.querySelector("#meaning").innerHTML = `${defs2}`;
};
