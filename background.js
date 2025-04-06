var c = document.getElementById("c");
var ctx = c.getContext("2d");

// making the canvas full screen
// Suggestion for sharpness: Adjust canvas dimensions by devicePixelRatio
// const scale = window.devicePixelRatio;
// c.width = Math.floor(window.innerWidth * scale);
// c.height = Math.floor(window.innerHeight * scale);
// c.style.width = window.innerWidth + "px";
// c.style.height = window.innerHeight + "px";
// ctx.scale(scale, scale);

c.height = window.innerHeight;
c.width = window.innerWidth;

// characters - taken from the unicode charset
// Suggestion: Try different character sets, like Katakana:
// var matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
// Or even binary:
// var matrix = "01";
var matrix =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
// converting the string into an array of single characters
matrix = matrix.split("");

// Suggestion: Experiment with font size and family for different looks.
// Monospace fonts like 'Courier New', 'Consolas', or 'monospace' work well.
var font_size = 7;
var columns = c.width / font_size; // number of columns for the rain
var drops = [];

// Initialize drops
for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  // Black BG for the canvas, translucent BG to show trail
  // Suggestion: Adjust the alpha (0.04) for a shorter/longer trail effect.
  // Lower value = longer trail, higher value = shorter trail.
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);

  // Suggestion: Experiment with different colors or dynamic colors.
  ctx.fillStyle = "#42f460"; // green text
  ctx.font = font_size + "px arial"; // Try different fonts here too

  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    // Reset drop to top randomly after it has crossed the screen
    // Suggestion: Change the random factor (0.975) to make resets more/less frequent.
    // Or make the speed variable per column.
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    // Increment Y coordinate
    // Suggestion: Vary the increment for different speeds: drops[i] += Math.random() + 0.5;
    // drops[i]++;
    drops[i] += Math.random() + 0.56;
  }
}

// Suggestion: Use requestAnimationFrame for smoother, potentially more performant animation.
// let animationFrameId;
// function animationLoop() {
//   draw();
//   animationFrameId = requestAnimationFrame(animationLoop);
// }
// requestAnimationFrame(animationLoop);
// To stop: cancelAnimationFrame(animationFrameId);
setInterval(draw, 23); // Lower interval (e.g., 20) = faster rain, higher (e.g., 50) = slower.

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("c");

  // Suggestion: Add a resize handler to recalculate columns and drops if window size changes.
  // window.addEventListener('resize', () => { /* recalculate canvas size, columns, drops */ });

  canvas.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
});
