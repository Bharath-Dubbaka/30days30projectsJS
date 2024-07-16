console.log("Text To synth");

// WebAPI synth from window
let synth = window.speechSynthesis;
if (synth.onvoiceschanged !== undefined) {
   synth.onvoiceschanged = () => voiceRender();
}
// above due to async nature of API
//GOOD INSIGHTS ON ISSUE - READ WHOLE PAGE https://github.com/electron/electron/issues/22844
//https://developer.mozilla.org/en-US/docs/Web/API/synthSynthesis/getVoices

// selectors
const textInput = document.querySelector(".text");
const btn = document.querySelector(".btn");
const voiceSelector = document.querySelector("#voiceSelector");
let voices = [];
// functions
// const inputVal = function (params) {
//    //    console.log(textInput.innerHTML, "textInput.innerHTML");
//    //    let utterance = new synthSynthesisUtterance(textInput.innerHTML);
//    //    console.log(utterance, "utterance");
//    //    synthSynthesis.speak(utterance);
//    voices.map((voice) => {
//       console.log(voice);
//    });
// };

let voiceRender = function (params) {
   voices = synth.getVoices();
   console.log(voices);
   for (let i = 0; i < voices.length; i++) {
      //   let voice = voices[i];
      //   let elem = `<option value=${voice}>${voice}</option>`;
      //   voiceSelector.appendChild(elem);

      //   const option = document.createElement("option");
      //   option.textContent = `${voices[i].name} (${voices[i].lang})`;
      //   option.setAttribute("data-lang", voices[i].lang);
      //   option.setAttribute("data-name", voices[i].name);
      //   voiceSelector.appendChild(option);

      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
         option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      console.log(option);
      voiceSelector.appendChild(option);
   }
};
// voiceRender();

// function populateVoiceList() {
//    synth.getVoices(); // now should have an array of all voices
// }
// EventListener
// btn.addEventListener("click", inputVal)
