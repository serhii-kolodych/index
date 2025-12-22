// Wait until page is fully loaded AND visible
window.addEventListener("load", () => {
  requestIdleCallback(() => {
    // Wait for browser idle time
    const white = localStorage.getItem("white") === "1";
    const s = document.createElement("script");
    s.src = white ? "/background-white.js" : "/background.js";
    document.body.appendChild(s);
  });
});

// This can run immediately
const back = document.getElementById("back-to-home");
if (back) back.onclick = () => (location.href = "../index.html");

// document.addEventListener("DOMContentLoaded", () => {
//   const white = localStorage.getItem("white") === "1";
//   const s = document.createElement("script");
//   s.src = white ? "/background-white.js" : "/background.js";
//   document.body.appendChild(s);

//   const back = document.getElementById("back-to-home");
//   if (back) back.onclick = () => (location.href = "../index.html");
// });
