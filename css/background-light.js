(function () {
  console.log("🌅 - loading background-light.js");

  const canvas = document.getElementById("background-canvas");

  if (!canvas) {
    console.error("🌅 - ❌ Background canvas not found");
    return;
  }

  const ctx = canvas.getContext("2d");

  // Making the canvas full screen
  function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    console.log("🌅 - ✅ Canvas resized:", canvas.width, "x", canvas.height);
    drawBackground();
  }

  // Function to create the gradient background
  function drawBackground() {
    // Creating a vertical gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    // Defining the colors with more white and reduced peach
    gradient.addColorStop(0, "#ffffff"); // White at the top
    gradient.addColorStop(0.5, "#e0f7fa"); // Light cyan stretches to 50% height
    gradient.addColorStop(0.75, "#ffd180"); // Light orange begins after cyan (less peach)
    gradient.addColorStop(1, "#ff8a65"); // Sunset orange at the bottom

    // Applying the gradient as fill style
    ctx.fillStyle = gradient;

    // Filling the entire canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log("🌅 - Light background rendered!");
  }

  // Initialize
  resizeCanvas();

  // Redraw the background when the window is resized
  window.addEventListener("resize", resizeCanvas);
})();

console.log("🌅 - closing background-light.js");
