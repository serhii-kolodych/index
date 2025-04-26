console.log("🐞 start loading scripts... 🐞");

// Array to keep track of loaded scripts
var loadedScripts = [];

// Define gtag globally
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

// Function to load external scripts dynamically and track them
function loadScript(src, async = true) {
  var script = document.createElement("script");
  script.src = src;
  script.async = async;
  document.head.appendChild(script);

  loadedScripts.push(script);
}

// Function to load the tracking scripts
function loadTrackingScripts() {
  // Google Analytics
  loadScript("https://www.googletagmanager.com/gtag/js?id=G-N496N6P80K");
  gtag("js", new Date());
  gtag("config", "G-N496N6P80K");

  // Microsoft Clarity
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);

    loadedScripts.push(t);
  })(window, document, "clarity", "script", "nar7r3ykv5");
}

// Expose the function globally
window.loadTrackingScripts = loadTrackingScripts;

console.log("🪲 scripts loaded successfully! 🪲");
