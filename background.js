// MOBILE-OPTIMIZED background.js - Adjusts for device performance

const c = document.getElementById("c");
if (!c) return;

const ctx = c.getContext("2d", { alpha: false }); // Faster rendering

// Detect if mobile for performance adjustments
const isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth <= 768;

// Set canvas dimensions
c.height = window.innerHeight;
c.width = window.innerWidth;

const matrix =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(
    ""
  );

// Adjust settings based on device
const font_size = isMobile ? 10 : 7; // Larger characters on mobile = fewer to render
const columns = Math.floor(c.width / font_size);
const drops = Array(columns).fill(1);

// Performance-optimized draw function
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#42f460";
  ctx.font = `${font_size}px arial`;

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > c.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i] += Math.random() + 0.56;
  }
}

// Adaptive FPS based on device
const targetFPS = isMobile ? 30 : 43; // Lower FPS on mobile
const interval = 1000 / targetFPS;
let lastTime = 0;

function animate(currentTime) {
  requestAnimationFrame(animate);

  const deltaTime = currentTime - lastTime;
  if (deltaTime > interval) {
    lastTime = currentTime - (deltaTime % interval);
    draw();
  }
}

// Start animation
requestAnimationFrame(animate);

// Click handler
c.addEventListener("click", () => {
  location.href = "../index.html";
});

// Optimized resize handler
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    const newColumns = Math.floor(c.width / font_size);
    drops.length = newColumns;
    drops.fill(1);
  }, 250);
});

// Pause animation when tab is hidden (saves battery)
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Optionally pause animation when not visible
    // You can add pause logic here if needed
  }
});

// var c = document.getElementById("c");
// var ctx = c.getContext("2d");

// const c_height = window.innerHeight;
// const c_width = window.innerWidth;

// c.height = c_height;
// c.width = c_width;

// // var matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

// var matrix =
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
// // converting the string into an array of single characters
// matrix = matrix.split("");

// // Suggestion: Experiment with font size and family for different looks.
// // Monospace fonts like 'Courier New', 'Consolas', or 'monospace' work well.
// var font_size = 7;
// var columns = c.width / font_size; // number of columns for the rain
// var drops = [];

// // Initialize drops
// for (var x = 0; x < columns; x++) drops[x] = 1;

// function draw() {
//   // Black BG for the canvas, translucent BG to show trail
//   // Suggestion: Adjust the alpha (0.04) for a shorter/longer trail effect.
//   // Lower value = longer trail, higher value = shorter trail.
//   ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
//   ctx.fillRect(0, 0, c.width, c.height);

//   // Suggestion: Experiment with different colors or dynamic colors.
//   ctx.fillStyle = "#42f460"; // green text
//   ctx.font = font_size + "px arial"; // Try different fonts here too

//   for (var i = 0; i < drops.length; i++) {
//     var text = matrix[Math.floor(Math.random() * matrix.length)];
//     ctx.fillText(text, i * font_size, drops[i] * font_size);

//     // Reset drop to top randomly after it has crossed the screen
//     // Suggestion: Change the random factor (0.975) to make resets more/less frequent.
//     // Or make the speed variable per column.
//     if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

//     // Increment Y coordinate
//     // Suggestion: Vary the increment for different speeds: drops[i] += Math.random() + 0.5;
//     // drops[i]++;
//     drops[i] += Math.random() + 0.56;
//   }
// }

// setInterval(draw, 23); // Lower interval (e.g., 20) = faster rain, higher (e.g., 50) = slower.

// // add this near top of your scripts
// document.addEventListener("click", (e) => {
//   if (e.target && e.target.id === "c") {
//     location.href = "../index.html";
//   }
// });
