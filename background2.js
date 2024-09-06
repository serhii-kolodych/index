// Canvas setup
var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

// Array to store bubbles
var bubbles = [];
var bubbleCount = 50;

// Bubble class
class Bubble {
    constructor(x, y, size, speedX, speedY, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = opacity;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "#ffffff"; // Bubble color
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < -this.size || this.x < -this.size || this.x > c.width + this.size) {
            this.y = c.height + this.size;
            this.x = Math.random() * c.width;
            this.speedY = -(1 + Math.random() * 3);
            this.speedX = Math.random() * 2 - 1;
            this.size = 10 + Math.random() * 30;
            this.opacity = 0.5 + Math.random() * 0.5;
        }
    }
}

// Create bubbles
for (var i = 0; i < bubbleCount; i++) {
    var size = 10 + Math.random() * 30;
    var x = Math.random() * c.width;
    var y = Math.random() * c.height;
    var speedX = Math.random() * 2 - 1;
    var speedY = -(1 + Math.random() * 3);
    var opacity = 0.5 + Math.random() * 0.5;
    bubbles.push(new Bubble(x, y, size, speedX, speedY, opacity));
}

// Draw function
function draw() {
    // Peach-colored background
    ctx.fillStyle = "#FFDAB9"; // Peach color
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw and update bubbles
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].update();
    }

    requestAnimationFrame(draw);
}

draw();

// Add interaction to make bubbles move faster on click
c.addEventListener("click", function () {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].speedY *= 1.5;
    }
});
