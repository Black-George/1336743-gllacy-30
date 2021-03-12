const siteWrapper = document.querySelector(".page-body");
let siteWrapperCurrentClass = "site-wrapper-1";
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
let slideCurrent = slider.querySelector(".slide-current");
const buttons = slider.querySelectorAll("button");
let buttonCurrent = slider.querySelector(".current");
const wrappersArray = ["site-wrapper-1", "site-wrapper-2", "site-wrapper-3"];

const toggleItems = function (button, slide, wrapperArray) {
  button.addEventListener("click", function () {
    buttonCurrent.classList.remove("current");
    button.classList.add("current");
    buttonCurrent = button;
    slideCurrent.classList.remove("slide-current");
    slide.classList.add("slide-current");
    slideCurrent = slide;
    siteWrapper.classList.remove(siteWrapperCurrentClass);
    siteWrapper.classList.add(wrapperArray);
    siteWrapperCurrentClass = wrapperArray;
  });
};

for (let i = 0; i < buttons.length; i++) {
  toggleItems(buttons[i], slides[i], wrappersArray[i]);
}
