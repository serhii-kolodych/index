var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

// var matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

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

setInterval(draw, 23); // Lower interval (e.g., 20) = faster rain, higher (e.g., 50) = slower.

// add this near top of your scripts
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "c") {
    location.href = "../index";
  }
});
