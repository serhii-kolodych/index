var c = document.getElementById("c");
var ctx = c.getContext("2d");

// Making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// Function to create the gradient background
function drawBackground() {
  // Creating a vertical gradient
  var gradient = ctx.createLinearGradient(0, 0, 0, c.height);

  // Defining the colors with more white and reduced peach
  gradient.addColorStop(0, "#ffffff"); // White at the top
  gradient.addColorStop(0.7, "#e0f7fa"); // Light cyan stretches to 70% height
  gradient.addColorStop(0.85, "#ffd180"); // Light orange begins after cyan (less peach)
  gradient.addColorStop(1, "#ff8a65"); // Sunset orange at the bottom

  // Applying the gradient as fill style
  ctx.fillStyle = gradient;

  // Filling the entire canvas
  ctx.fillRect(0, 0, c.width, c.height);
}

// Call the function to draw the background initially
drawBackground();

// Redraw the background when the window is resized
window.addEventListener("resize", function () {
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  drawBackground();
});

// add this near top of your scripts
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "c") {
    location.href = "../index.html";
  }
});
