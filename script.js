// Creating Toggle

let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let background = document.querySelector("#background");

let toggle = {
  light: {
    bg: "white",
    fg: "black",
  },
  dark: {
    fg: "white",
    bg: "black",
  },
};

light.addEventListener("click", function () {
  background.style.backgroundColor = toggle.light.bg;
  background.style.color = toggle.light.fg;
});

dark.addEventListener("click", function () {
  background.style.backgroundColor = toggle.dark.bg;
  background.style.color = toggle.dark.fg;
});

//Creating Bubbles
let canvas = document.querySelector("#canvas");

// Creating Array
let colors = ["#ff7979", "#badc58", "#22a6b3", "#2ecc71", "#ffbe76", "#e056fd"];

function makeBubbles() {
  for (i = 0; i < 54; i++) {
    let randomNumber = Math.floor(Math.random() * colors.length);
    canvas.innerHTML += `<div class="bubble" style="background-color: ${colors[randomNumber]}";></div>`;
  }
}
makeBubbles();

//Creating Function for Guessing Color
let guess = document.querySelector("#guess");

function guessColor() {
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  guess.style.backgroundColor = colors[randomColorIndex];
}

guessColor();

//Creating Timer

let start = 60;
let time = document.querySelector("#time");

function timer() {
  if (start > 0) {
    start--;
    time.innerHTML = start;
  } else {
    canvas.style.display = "none";
    final.style.display = "block";
    point.innerHTML = points;
    canvas.style.backgroundColor = "#fefefe";
  }
}
setInterval(timer, 1000);

// Scoring

let points = 0;

canvas.addEventListener("click", function (e) {
  // console.log(e);
  let num = e.target.style.backgroundColor;
  console.log(num);

  if (num == guess.style.backgroundColor) {
    points = points + 1;
    score.innerHTML = points;
    canvas.innerHTML = "";
    makeBubbles();
    guessColor();
  }
});

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  location.reload();
});

// Add the else part in Session 3

// function timer() {
//   if (start > 0) {
//     start--;
//     time.innerHTML = start;
//   } else {
//     canvas.style.display = 'none';
//     final.style.display ='block';
//     point.innerHTML= points;
//     canvas.style.backgroundColor = "#fefefe";
//   }
// }
