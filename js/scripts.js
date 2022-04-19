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
