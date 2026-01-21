document.addEventListener("DOMContentLoaded", () => {
  console.log("🌈 loading index-1.js");

  const isWhite = localStorage.getItem("white") === "1";
  const script = document.createElement("script");
  script.src = isWhite ? "/background-white.js" : "/background.js";
  script.defer = true;
  document.body.appendChild(script);

  console.log("🌈 white theme:", isWhite);

  const back = document.getElementById("back-to-home");
  if (back) {
    back.addEventListener("click", () => {
      location.href = "../index";
    });
  }

  console.log("🌈 closing index-1.js");
});
