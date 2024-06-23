const keys = document.querySelectorAll(".key");

const keyCode = {
  A: 65,
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

window.addEventListener("keydown", playSound);

keys.forEach((key) =>
  key.addEventListener("click", (e) => {
    playSound(e);
  })
);

function playSound(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );
  audio.play();
}

let setT = function () {
  for (var index = 0; index < 5; index++) {
    function close(index) {
      setTimeout(function () {
        console.log(index);
      }, index * 2000);
    }
    close(index);
  }
};
setT();
