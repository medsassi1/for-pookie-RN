const questions = [
  "Do you love me?",
  "Will you forgive me <br> whatever i do?",
  "Will you hug me?",
  "Do you miss me?",
  "Am I your everything?",
  "Will you stay with me forever?",
  "Would you choose me again?",
  "Do you believe in us?",
  "i'm i your only favorite bff?",
  "Is your heart mine?",
];

const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
document.getElementById("loveQuestion").innerHTML = randomQuestion;
//random question
//punsh function::
const gif = document.getElementById("gif1");
function punsh() {
  const style1 = document.createElement("style");
  style1.innerHTML = `
  @keyframes punsh {
    0%{scale: 0;left:0%}
    10%{scale: 100%;}
    100%{scale: 100%;top: 30%;left: 20%;}
}
`;
  document.head.appendChild(style1);
}
//img3::
function img3() {
  const style3 = document.createElement("style");
  style3.innerHTML = `@keyframes img3 {
    0%{scale:10% ;}
    90%{scale: 110%;}
    100%{scale: 100%;}
}
`;
  document.head.appendChild(style3);
}
//img2::
function img2() {
  const style2 = document.createElement("style");
  style2.innerHTML = `@keyframes img2 {
    0%{scale: 100%;}
    100%{scale: 0%;}
}
`;
  document.head.appendChild(style2);
}
//2pulse::
function pulse() {
  const style = document.createElement("style");
  style.innerHTML = `
      @keyframes pulse {
        0% {
          background-position: 100% 100%;
      }
      100% {
          background-position: 0% 0%;
        }
      }
       `;
  document.head.appendChild(style);
}
pulse();
//random rgb::
const imgbackground = document.getElementById("img");
function randomColor(a = 1) {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgba(${r},${b},${g}${a})`;
}
imgbackground.addEventListener("click", () => {
  let a = randomColor(0.8);
  let b = randomColor();
  const change = `linear-gradient(115deg,${a},${b},${a},${b})`;
  imgbackground.style.backgroundImage = change;
});
//no $run::
const div = document.querySelector(".no");
const originalTop = 0; // same as CSS
const originalLeft = 20; // same as CSS
//yes bigger::
const yesDiv = document.querySelector(".yes");
let currentScale = 1;
//
let clickCount = 0;
const maxClicks = 8;
div.addEventListener("click", () => {
  if (clickCount >= maxClicks) return;
  clickCount++;
  const maxMovePercent = 5; // move up to ±5%
  const minleft = 50;
  const maxleft = 10;
  // Calculate new position within [original - maxMovePercent, original + maxMovePercent]
  const newTop =
    originalTop + (Math.random() * 10 * maxMovePercent - maxMovePercent);
  const newLeft = Math.random() * (maxleft - minleft) + minleft;
  // Apply new position with % units
  div.style.top = newTop + "%";
  div.style.left = newLeft + "%";
  div.style.position = "absolute";
  div.style.transform = "rotate(30deg)";
  setTimeout(() => {
    div.style.transform = "rotate(-30deg)";
    setTimeout(() => {
      div.style.transform = "rotate(0deg)";
    }, 300);
  }, 300);
  //yes bigger::
  currentScale += 0.8;
  yesDiv.style.transform = `translateY(-30px) translateX(40px) scale(${currentScale})`;
  setTimeout(() => {
    yesDiv.style.transform = `translateY(0px) translateX(40px) scale(${currentScale})`;
  }, 150);
  if (clickCount === maxClicks) {
    yesDiv.style.transform = `translateY(-30px) translateX(40px) scale(${
      currentScale * 2
    })`;
    setTimeout(() => {
      yesDiv.style.transform = `translateY(0px) translateX(40px) scale(${
        currentScale * 2
      })`;
    }, 150);
    setTimeout(() => {
      div.style.transition = "2.5s";
      div.style.top = "90%";
      div.style.left = "40%";
    }, 400); // small delay so the final jump plays
    setTimeout(() => {
      div.style.animation = `scared 0.2s linear infinite`;
    }, 3000);
    setTimeout(() => {
      div.style.animation=`img2 0.2s linear forwards `
    }, 6500);
    setTimeout(() => {
      document.getElementById('gif2').style.animation=`img2 0.2s linear forwards `
    }, 8000);
    punsh();
    img2();
    img3();
  }
});
//scared::
function scared() {
  const style4 = document.createElement("style");
  style4.innerHTML = `@keyframes scared {
    0%{right: 10%;}
    33.5%{left: 42.2%;}  
}
`;
  document.head.appendChild(style4);
}
scared();
