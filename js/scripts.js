import {
  navHighlighter,
  dragElement,
  navAnimator,
  resizeListener,
} from "./consts";

window.downloadResume = function () {
  window
    .open(
      "https://docs.google.com/document/d/1NPI-piwKe-UpZ0HXgYMwgq9PFD0h3gsX1yV5ZfGd3ko/edit?usp=sharing",
      "_blank"
    )
    .focus();
};

document.getElementById("resume-icon").onclick = downloadResume;

// Add an event listener listening for scroll
document
  .getElementById("scroll-container")
  .addEventListener("scroll", navHighlighter);
document
  .getElementById("scroll-container")
  .addEventListener("scroll", navAnimator, { capture: true, passive: true });
dragElement(document.getElementById("avatar"));

window.addEventListener("resize", resizeListener);

window.addEventListener("load", function () {
  this.setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.remove();
    this.document.body.className = "background";
    this.document.getElementById("scroll-container").style.visibility =
      "visible";
    this.document.getElementById("avatar").style.visibility = "visible";
  }, 1000);
});
