// Initialize state
console.log("👌 - loading scriptIndex.js: did you agree to cookies? 🍀 🐸");

let whiteState = localStorage.getItem("white") || "0";

// Load tracking script if cookies accepted
function cookiesManager() {
  const savedColor = localStorage.getItem("buttonColor");
  if (savedColor === "green") {
    loadTrackingScript();
  }
}

function loadTrackingScript() {
  // Prevent duplicate script loading
  if (document.querySelector('script[src="tracking.js"]')) {
    return;
  }

  const script = document.createElement("script");
  script.src = "tracking.js";
  script.charset = "utf-8";
  script.async = true;
  script.onerror = function () {
    console.error("👌 - Failed to load tracking.js");
  };
  document.head.appendChild(script);
}

// Apply saved button styles
function applyButtonStyles() {
  const savedColor = localStorage.getItem("buttonColor");
  const savedDateTime = localStorage.getItem("dateTime");
  const feedbackMessage = document.getElementById("feedbackMessage");

  if (!feedbackMessage) return;

  if (savedDateTime) {
    feedbackMessage.textContent = savedDateTime;
    feedbackMessage.style.display = "block";
    console.log("👌 - Found savedDateTime:", savedDateTime, "🍀 🐸");
  }

  if (savedColor) {
    document.querySelectorAll(".response-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.color === savedColor);
    });
  }
}

// Show feedback message
function showFeedback(message) {
  const feedbackMessage = document.getElementById("feedbackMessage");
  if (!feedbackMessage) return;

  const dateTime = new Date().toLocaleString();
  const fullMessage = `${message} ${dateTime}`;

  localStorage.setItem("dateTime", fullMessage);
  feedbackMessage.textContent = fullMessage;
  feedbackMessage.style.display = "block";
}

// Handle button clicks
function handleButtonClick(color) {
  const message =
    color === "green"
      ? "You agreed to use cookies on your device. Date and time:"
      : "You blocked using cookies on your device. Date and time:";

  localStorage.setItem("buttonColor", color);
  applyButtonStyles();
  showFeedback(message);

  if (color === "green") {
    loadTrackingScript();
    console.log("👌 - yes tracking.js 🍀 🐸");
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  applyButtonStyles();
  cookiesManager();

  // Setup button event listeners
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  if (yesButton) {
    yesButton.addEventListener("click", () => handleButtonClick("green"));
  }

  if (noButton) {
    noButton.addEventListener("click", () => handleButtonClick("red"));
  }
});

console.log("👌 - closing scriptIndex.js 🍀 🐸");
