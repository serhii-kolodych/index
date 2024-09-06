var c = document.getElementById("c");
var ctx = c.getContext("2d");

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
// converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; // number of columns for the rain
var drops = [];

// Initialize drops
for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
    // Black BG for the canvas, translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#42f460"; // green text
    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // Reset drop to top randomly after it has crossed the screen
        if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

        // Increment Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("c");

    canvas.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});
