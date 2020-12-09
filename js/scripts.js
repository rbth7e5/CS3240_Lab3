import booleanContains from "@turf/boolean-contains";
import { point, polygon } from "@turf/helpers";
import { sg_geojson, navHighlighter, dragElement, navAnimator } from "./consts";

window.downloadResume = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLoc = point([
          position.coords.longitude,
          position.coords.latitude,
        ]);
        const sg_polygon = polygon(sg_geojson.features[0].geometry.coordinates);
        if (booleanContains(sg_polygon, userLoc)) {
          document.getElementById("download-local").click();
        } else {
          document.getElementById("download-resume").click();
        }
      },
      () => {
        document.getElementById("download-resume").click();
      }
    );
  } else {
    document.getElementById("download-resume").click();
  }
};

document.getElementById("resume-icon").onclick = downloadResume;

// Add an event listener listening for scroll
document
  .getElementById("scroll-container")
  .addEventListener("scroll", navHighlighter);
document
  .getElementById("scroll-container")
  .addEventListener("scroll", navAnimator);
dragElement(document.getElementById("avatar"));
