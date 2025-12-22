document.addEventListener("DOMContentLoaded", () => {
  const white = localStorage.getItem("white") === "1";
  const s = document.createElement("script");
  s.src = white ? "/background-white.js" : "/background.js";
  document.body.appendChild(s);

  const back = document.getElementById("back-to-home");
  if (back) back.onclick = () => (location.href = "../index.html");
});
