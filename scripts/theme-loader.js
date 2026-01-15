document.addEventListener("DOMContentLoaded", () => {
  console.log("🌈 loading theme-loader.js");

  const isWhite = localStorage.getItem("white") === "1";
  console.log("🌈 white theme:", isWhite);

  document.body.setAttribute("data-theme", isWhite ? "light" : "dark");

  const bgScript = document.createElement("script");
  bgScript.src = isWhite
    ? "../css/background-light.js"
    : "../css/background-dark.js";
  bgScript.defer = true;
  document.body.appendChild(bgScript);

  const colorLink = document.createElement("link");
  colorLink.rel = "stylesheet";
  colorLink.id = "color-theme-stylesheet";
  colorLink.href = isWhite
    ? "../css/colors-light.css"
    : "../css/colors-dark.css";
  document.head.appendChild(colorLink);

  const toggle = document.getElementById("theme-toggle");
  const label = document.querySelector(".theme-toggle__label");

  if (toggle) {
    toggle.addEventListener("click", () => {
      localStorage.setItem("white", isWhite ? "0" : "1");
      location.reload();
    });
  }

  if (label) {
    label.textContent = isWhite ? "Dark" : "Light";
  }

  console.log("🌈 closing theme-loader.js");
});
