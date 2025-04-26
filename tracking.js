console.log("🐞 start loading scripts... 🐞");

// Google Analytics
(function () {
  var gaScript = document.createElement("script");
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-N496N6P80K";
  gaScript.async = true;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-N496N6P80K");
})();

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
})(window, document, "clarity", "script", "nar7r3ykv5");

console.log("🪲 scripts loaded successfully! 🪲");
