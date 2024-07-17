console.log("English Dictionary");

let urlBase = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const inputEng = document.querySelector(".inputEng");
const convertBtn = document.querySelector(".convertBtn");
const results = document.querySelector(".results");

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
   //    fetch(`${urlBase}${inputEng.value}`)
   //       .then((res) => {
   //          res.json();
   //       })
   //       .then((data) => {
   //          console.log(data);
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //       });

   console.log(data[0].meanings[0].definitions[0], "data");
   let defs = data[0].meanings[0].definitions[0].definition;
   //    defs.forEach((defs) => {
   console.log(defs);
   //   const item = `<div className="items">{defs.definition}</div>`;
   const item = document.createElement("div");
   item.className = "item";
   item.innerHTML = defs;
   results.innerHTML = "";
   results.appendChild(item);
   //    });
   //    results.appendChild(item);
   //    data.forEach(element => {
   //     elem
   //    });
};
