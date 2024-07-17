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
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let voices = [];
let speaking = false;

// to get available voices from api and map them as options in select
let voiceRender = function (params) {
   voices = synth.getVoices();
   //  IF voices return empty array check with onvoiceschanged !== undefined
   for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
         option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
   }
};
// voiceRender();

// converting text to speech with selected voice
const convertToSpeech = function (event) {
   event.preventDefault();
   if (textInputClass.innerText.length <= 0) {
      alert("please enter some text...");
   } else {
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

      //    To reset to normal after speech is completed
      utterThis.onend = function (event) {
         //   alert("Finished in " + event.elapsedTime + " seconds.");
         pause.style.display = "none";
         btn.style.display = "flex";
         synth.cancel();
      };
      synth.speak(utterThis);
      speaking = true;
      //    textInputClass.blur();
   }
};
// EventListener
btn.addEventListener("click", convertToSpeech);

// reset.addEventListener("click", function (params) {
//    synth.cancel();
// });
pause.addEventListener("click", function (params) {
   console.log("clicked");
   if (speaking == true) {
      speaking = false;
      synth.pause();
      let pausedV = synth.paused;
      //   console.log(pausedV, "paused");
      let speakingV = synth.speaking;
      //   console.log(speakingV, "synth.speaking");
      let pendingV = synth.pending;
      //   console.log(pendingV, "synth.pending");
   } else {
      speaking = true;
      synth.resume();
   }
});

// To check which button to display and speaking status
setInterval(() => {
   if (!synth.speaking) {
      pause.style.display = "none";
      btn.style.display = "flex";
   } else {
      pause.style.display = "flex";
      btn.style.display = "none";
   }
}, 300);
