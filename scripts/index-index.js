document.addEventListener("DOMContentLoaded", () => {
  console.log("🌈 loading index-index.js");

  const isWhite = localStorage.getItem("white") === "1";
  console.log("🌈 white theme:", isWhite);

  document.body.setAttribute("data-theme", isWhite ? "light" : "dark");

  const bgScript = document.createElement("script");
  bgScript.src = isWhite ? "css/background-light.js" : "css/background-dark.js";
  bgScript.defer = true;
  document.body.appendChild(bgScript);

  const colorLink = document.createElement("link");
  colorLink.rel = "stylesheet";
  colorLink.id = "color-theme-stylesheet";
  colorLink.href = isWhite ? "css/colors-light.css" : "css/colors-dark.css";
  document.head.appendChild(colorLink);

  const back = document.getElementById("back-to-home");
  if (back) {
    back.addEventListener("click", () => {
      location.href = "../index";
    });
  }

  console.log("🌈 closing index-index.js");
});
