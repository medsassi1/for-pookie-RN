document.addEventListener("DOMContentLoaded", function () {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");
  const page4 = document.getElementById("page4");
  const yesDiv = document.querySelector(".yes");
  const h1jump = document.getElementById("iknew");
  const continueButton = document.getElementById("continueButton");
  const submitButton = document.getElementById("submitButton");
  const input = document.getElementById("birthdayInput");
  const loveu = document.getElementById("pup-up");

  // Hide all pages except page1 initially
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";

  //jump::
  function jump(y, s) {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes jump {
        0%{transform: translateY(5px);}
        50%{transform: translateY(${y}px);scale:${s}}
        100%{transform: translateY(5px);}}
    `;
    document.head.appendChild(style);
  }

  // Step 1: Yes button => go to Page 2
  yesDiv.addEventListener("click", function () {
    jump(-30, 1);
    document.body.style.backgroundImage =
      "linear-gradient(-135deg,rgba(151, 139, 5, 0.924),rgb(215, 213, 104),rgba(151, 139, 5, 0.924),rgb(215, 213, 104))";
    document.body.style.animationDuration = "20s";
    loveu.style.scale = "0";
    setTimeout(() => {
      loveu.style.scale = "5";
      setTimeout(() => {
        loveu.style.scale = "150%";
      }, 300);
    }, 1300);
    page1.style.display = "none";
    page2.style.display = "block";
  });

  // Step 2: Continue → go to Page 3
  continueButton.addEventListener("click", function () {
    page2.style.display = "none";
    page3.style.display = "block";
  });

  // Step 3: Submit answer → check input
  submitButton.addEventListener("click", function () {
    const answer = input.value.trim().toLowerCase();

    if (answer === "me" || answer==="rania" || answer==="ranoushti"|| answer==="ranoush"||answer==="ranoshti"|| answer==="you"||answer==="أني"||answer=== "رنوش" || answer==="رنوشتي" || answer==="انا" ||answer==="اني") {
      document.body.style.backgroundImage =
        "linear-gradient(-135deg,rgba(110, 1, 96, 0.924),rgb(243, 3, 187),rgba(226, 13, 13, 0.924),rgb(215, 104, 104))";
      document.body.style.animationDuration = "20s";
      page3.style.display = "none";
      page4.style.display = "block";
    } else {
      // Move submit button to random position
      const randomX = Math.floor(Math.random() *300 );
      const randomY = Math.floor(Math.random() * 600);
      submitButton.style.position = "absolute";
      submitButton.style.left = `${randomX}px`;
      submitButton.style.top = `${randomY}px`;
      submitButton.style.transition = " 0.3s";
      submitButton.style.transform = "rotate(30deg)";

      setTimeout(() => {
        submitButton.style.transform = "rotate(-30deg)";
        setTimeout(() => {
          submitButton.style.transform = "rotate(0deg)";
        }, 300);
      }, 150);
    }
  });
});
