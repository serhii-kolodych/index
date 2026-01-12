// Function to manage cookies based on user selection
function cookiesManager() {
  const savedColor = localStorage.getItem("buttonColor");

  // Load tracking scripts if user has previously agreed
  if (savedColor === "green") {
    console.log(
      "🐸 savedColor === green - yes tracking.js 🍀 🐸 (from index-2.js"
    );
    const script = document.createElement("script");
    script.src = "tracking.js";
    script.async = true; // Optional, to load asynchronously
    document.head.appendChild(script);
  }
}

// Function to apply button styles and show feedback message
function applyButtonStyles() {
  const savedColor = localStorage.getItem("buttonColor");
  const savedDateTime = localStorage.getItem("dateTime");
  const feedbackMessage = document.getElementById("feedbackMessage");

  // Display saved timestamp if available
  if (savedDateTime) {
    feedbackMessage.textContent = savedDateTime;
    feedbackMessage.style.display = "block";
  }

  // Style buttons based on saved color preference
  if (savedColor) {
    document.querySelectorAll(".response-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.color === savedColor);
    });

    // Update feedback message based on user's choice
    const message =
      savedColor === "green"
        ? "You agreed to use cookies on this device. Date and time:"
        : "You blocked this site from saving cookies on this device. Date and time:";
    showFeedback(message);
  }
}

// Function to show feedback message with timestamp
function showFeedback(message) {
  const feedbackMessage = document.getElementById("feedbackMessage");
  const dateTime = new Date().toLocaleString();
  const fullMessage = `${message} ${dateTime}`;

  // Save feedback message and timestamp
  localStorage.setItem("dateTime", fullMessage);

  // Display the feedback message
  feedbackMessage.textContent = fullMessage;
  feedbackMessage.style.display = "block";
}

// Function to handle button clicks and store preference
function handleButtonClick(color) {
  const message =
    color === "green"
      ? "You agreed to use cookies on your device. Date and time:"
      : "You blocked this site from saving cookies on your device. Date and time:";

  // Store selected color in local storage
  localStorage.setItem("buttonColor", color);

  // Apply button styles
  applyButtonStyles();

  // Show feedback message with timestamp
  showFeedback(message);

  // Load tracking scripts if user agrees (green)
  if (color === "green") {
    const script = document.createElement("script");
    script.src = "tracking.js";
    script.async = true; // Optional, to load asynchronously
    document.head.appendChild(script);

    // ✅ Tell Clarity that consent is given
    setTimeout(() => {
      if (typeof clarity === "function") clarity("consent");
    }, 1000);

    console.log("yes tracking.js 🍀 🐸");
  } else {
    // 🚫 Tell Clarity that consent is denied
    if (typeof clarity === "function") clarity("consent", false);
  }
}

// Set up event listeners for the buttons
document.getElementById("yesButton").addEventListener("click", function () {
  handleButtonClick("green");
});
document.getElementById("noButton").addEventListener("click", function () {
  handleButtonClick("red");
});

// Apply styles and load tracking scripts on page load if applicable
window.onload = function () {
  applyButtonStyles();
  cookiesManager();
};
