console.log("Text To synth");

// WebAPI synth from window
let synth = window.speechSynthesis;
if (synth.onvoiceschanged !== undefined) {
   synth.onvoiceschanged = () => voiceRender();
}
// synth.speak("utterance2");
// above due to async nature of API
//GOOD INSIGHTS ON ISSUE - READ WHOLE PAGE https://github.com/electron/electron/issues/22844
//https://developer.mozilla.org/en-US/docs/Web/API/synthSynthesis/getVoices

// selectors
const textInput = document.querySelector("#text");
const textInputClass = document.querySelector(".text");
const btn = document.querySelector(".btn");
const voiceSelect = document.querySelector("#voiceSelect");
let voices = [];
// functions
const inputVal = function (event) {
   console.log(textInputClass.innerText);
   event.preventDefault();
   const utterThis = new SpeechSynthesisUtterance(textInputClass.innerText);
   const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
   for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
         utterThis.voice = voices[i];
      }
   }
   //    utterThis.pitch = pitch.value;
   //    utterThis.rate = rate.value;
   console.log(utterThis);
   window.speechSynthesis.speak(utterThis);

   textInputClass.blur();
};

let voiceRender = function (params) {
   voices = synth.getVoices();
   //    console.log(voices);
   for (let i = 0; i < voices.length; i++) {
      //   let voice = voices[i];
      //   let elem = `<option value=${voice}>${voice}</option>`;
      //   voiceSelect.appendChild(elem);

      //   const option = document.createElement("option");
      //   option.textContent = `${voices[i].name} (${voices[i].lang})`;
      //   option.setAttribute("data-lang", voices[i].lang);
      //   option.setAttribute("data-name", voices[i].name);
      //   voiceSelect.appendChild(option);

      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
         option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      //   console.log(option);
      voiceSelect.appendChild(option);
   }
};
// voiceRender();

// EventListener
btn.addEventListener("click", inputVal);
