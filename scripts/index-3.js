document.addEventListener("DOMContentLoaded", function () {
  var whiteState = localStorage.getItem("white") || "0";
  var icon = document.getElementById("change-style-icon").querySelector("img");

  function setInitialStyle() {
    var stylesheet = document.getElementById("stylesheet");
    if (stylesheet) {
      stylesheet.setAttribute(
        "href",
        whiteState === "1" ? "../styles-white.css?v=16" : "../styles.css?v=17"
      );
    }
    if (icon) {
      icon.src =
        whiteState === "1" ? "shared/logo-matrix.png" : "shared/logo-light.png";
    }
  }

  setInitialStyle();

  if (icon) {
    icon.parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      whiteState = whiteState === "0" ? "1" : "0";
      localStorage.setItem("white", whiteState);
      location.reload(); // ensures clean CSS switch
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var whiteState = localStorage.getItem("white") || "0";
  var currentStyle =
    whiteState === "1" ? "../styles-white.css?v=16" : "../styles.css?v=17";
  var stylesheet = document.getElementById("stylesheet");

  if (stylesheet) {
    stylesheet.setAttribute("href", currentStyle);
  }

  var link = document.getElementById("change-style-link");
  if (link) {
    link.textContent = whiteState === "1" ? "Matrix" : "White";

    link.addEventListener("click", function (e) {
      e.preventDefault();
      whiteState = whiteState === "0" ? "1" : "0";
      currentStyle =
        whiteState === "1" ? " ../styles-white.css" : "../styles.css";
      localStorage.setItem("white", whiteState);
      link.textContent = whiteState === "1" ? "Matrix" : "White";
      if (stylesheet) stylesheet.setAttribute("href", currentStyle);
      location.reload();
    });
  }
});
