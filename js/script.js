const talkForm = document.querySelector(".talk");
const maskForm = document.querySelector(".mascara-form");

const clickButton = document.querySelector(".contact-btn");

function showForm() {
  talkForm.style.left = "10%";
  talkForm.style.tranform = "translateX(-10%)";
  maskForm.style.visibility = "visible";
}

function hideForm() {
  talkForm.style.left = "-300px";
  talkForm.style.tranform = "translateX(0)";
  maskForm.style.visibility = "hidden";
}
