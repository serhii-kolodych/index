window.onload = function () {
  console.log("🍪 - loading cookie-check.js 🍪");

  if (localStorage.getItem("buttonColor") === "green") {
    console.log("🍪 - savedColor === green - yes tracking.js 🍀 🐸");
    const script = document.createElement("script");
    script.src = "../tracking.js";
    script.charset = "utf-8";
    document.head.appendChild(script);
    script.onload = () =>
      console.log("🍪 - tracking.js loaded successfully! 🍀 🐸");
  } else {
    console.log("🍪 - savedColor === not Green - NO TRACKING 🔴");
    console.log("🍪 - tracking.js NOT loaded 🛑");
  }
};

console.log("🍪 - closing cookie-check.js 🍪");
