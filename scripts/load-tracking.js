// Load tracking.js if user has agreed
window.onload = function () {
  if (localStorage.getItem("buttonColor") === "green") {
    var script = document.createElement("script");
    script.src = "../tracking.js";
    script.charset = "utf-8";
    document.head.appendChild(script);
  }
};
