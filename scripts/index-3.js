document.addEventListener("DOMContentLoaded", function () {
  var whiteState = localStorage.getItem("white") || "0";
  var stylesheet = document.getElementById("stylesheet");
  var link = document.getElementById("change-style-icon");

  function setInitialStyle() {
    // Set stylesheet
    if (stylesheet) {
      stylesheet.setAttribute(
        "href",
        whiteState === "1" ? "../styles-white.css?v=16" : "../styles.css?v=17"
      );
    }

    // Update icon if it has an img child (theme-logo case)
    var icon = link ? link.querySelector("img") : null;
    if (icon) {
      icon.src =
        whiteState === "1" ? "shared/logo-matrix.png" : "shared/logo-light.png";
    }

    // Update text content ONLY if it has change-style-logo class
    if (link && link.classList.contains("change-style-logo")) {
      link.textContent = whiteState === "1" ? "Matrix" : "White";
    }
  }

  setInitialStyle();

  // Add click event listener
  if (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      whiteState = whiteState === "0" ? "1" : "0";
      localStorage.setItem("white", whiteState);
      location.reload(); // Clean CSS switch
    });
  }
});
