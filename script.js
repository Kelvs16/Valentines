const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const question = document.getElementById("question");
const card = document.getElementById("card");

let noClicks = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  noBtn.style.position = "fixed";

  

  moveNoButton(); 
  noClicks++;

  if (noClicks === 4) {
    gif.src = "sad.gif";
    question.textContent = "Sure ka na dyan? ";
  } 
  else if (noClicks === 5) {
    gif.src = "begging.gif";
    question.textContent = "Pleaseee po be :(";
  } 
  else if (noClicks >= 6 && noClicks <= 8) {
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
  } 
  else if (noClicks >= 9) {
    gif.src = "hehe.gif";
    question.textContent = "Wala ka nang choice hehe ";

    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(3)";
  }
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>YAYYY!! </h1>
    <img src="yay.gif" style="width:220px;">
    <p style="font-size:20px;color:#ff4d6d;">
      HAPPY VALENTINE’S DAY!❤️🌹
    </p>
  `;
});

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
