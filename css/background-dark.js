(function () {
  console.log("🎬 - loading background-dark.js");

  const canvas = document.getElementById("background-canvas");

  if (!canvas) {
    console.error("🎬 - ❌ Background canvas not found");
    return;
  }

  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  console.log("🎬 - ✅ Canvas resized:", canvas.width, "x", canvas.height);

  // Matrix characters
  const matrix =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");

  const fontSize = 7;
  let columns = canvas.width / fontSize;
  let drops = [];

  // Initialize drops
  function initDrops() {
    columns = canvas.width / fontSize;
    drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
  }

  initDrops();

  function draw() {
    // Black BG for the canvas, translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = "#42f460";
    ctx.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Reset drop to top randomly after it has crossed the screen
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      // Increment Y coordinate with variable speed
      drops[i] += Math.random() + 0.56;
    }
  }

  // Start animation
  const interval = setInterval(draw, 23);
  console.log("🎬 - Matrix animation started!");

  // Handle window resize
  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    initDrops();
    console.log("🎬 -  Canvas resized:", canvas.width, "x", canvas.height);
  });

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    clearInterval(interval);
  });
})();

console.log("🎬 - closing background-dark.js");
