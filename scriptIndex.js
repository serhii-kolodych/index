// Initialize state
let whiteState = localStorage.getItem("white") || "0";

// Set background script on load
function setBackgroundScript() {
  const existingScript = document.getElementById("backgroundScript");
  const scriptSrc =
    whiteState === "1" ? "background-white.js" : "background.js";

  if (existingScript) {
    existingScript.remove();
  }

  const bgScript = document.createElement("script");
  bgScript.id = "backgroundScript";
  bgScript.src = scriptSrc;
  bgScript.onerror = function () {
    console.error(`Failed to load ${scriptSrc}`);
  };
  document.body.appendChild(bgScript);
}

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
  script.async = true;
  script.onerror = function () {
    console.error("Failed to load tracking.js");
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
      : "You blocked this site from saving cookies on your device. Date and time:";

  localStorage.setItem("buttonColor", color);
  applyButtonStyles();
  showFeedback(message);

  if (color === "green") {
    loadTrackingScript();
    console.log("yes tracking.js 🍀 🐸");
  }
}

// Set initial stylesheet
function setInitialStyle() {
  const currentStyle = whiteState === "1" ? "styles-white.css" : "styles.css";
  const stylesheet = document.getElementById("stylesheet");

  if (stylesheet) {
    stylesheet.setAttribute("href", currentStyle);
  }
}

// Setup theme toggle
function setupThemeToggle() {
  const link = document.getElementById("change-style-icon");
  if (!link) return;

  link.textContent = whiteState === "1" ? "Matrix" : "White";

  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Toggle state
    whiteState = whiteState === "0" ? "1" : "0";
    localStorage.setItem("white", whiteState);

    // Update stylesheet
    const newStyle = whiteState === "1" ? "styles-white.css" : "styles.css";
    const stylesheet = document.getElementById("stylesheet");
    if (stylesheet) {
      stylesheet.setAttribute("href", newStyle);
    }

    // Reload page to apply new background script
    location.reload();
  });
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  setBackgroundScript();
  setInitialStyle();
  setupThemeToggle();
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
