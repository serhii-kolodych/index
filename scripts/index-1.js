// OPTIMIZED index-1.js - Loads background on all devices, optimized for mobile

window.addEventListener("load", () => {
  const loadBackground = () => {
    const white = localStorage.getItem("white") === "1";
    const script = document.createElement("script");
    script.src = white ? "/background-white.js" : "/background.js";
    document.body.appendChild(script);
  };

  // Use requestIdleCallback for better performance
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadBackground, { timeout: 2000 });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(loadBackground, 100);
  }
});

// Back button handler - runs immediately
const back = document.getElementById("back-to-home");
if (back) {
  back.onclick = () => (location.href = "../index.html");
}

// // Wait until page is fully loaded AND visible
// window.addEventListener("load", () => {
//   requestIdleCallback(() => {
//     // Wait for browser idle time
//     const white = localStorage.getItem("white") === "1";
//     const s = document.createElement("script");
//     s.src = white ? "/background-white.js" : "/background.js";
//     document.body.appendChild(s);
//   });
// });

// // This can run immediately
// const back = document.getElementById("back-to-home");
// if (back) back.onclick = () => (location.href = "../index.html");

// document.addEventListener("DOMContentLoaded", () => {
//   const white = localStorage.getItem("white") === "1";
//   const s = document.createElement("script");
//   s.src = white ? "/background-white.js" : "/background.js";
//   document.body.appendChild(s);

//   const back = document.getElementById("back-to-home");
//   if (back) back.onclick = () => (location.href = "../index.html");
// });
