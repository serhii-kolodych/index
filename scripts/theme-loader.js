// <!-- load light or dark theme based on localStorage -->
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎨 - loading theme-loader.js");

  // Get theme from localStorage (default to 'dark')
  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  console.log(`🎨 - Current theme: ${theme} (isDark: ${isDark})`);

  // Set data-theme attribute on body FIRST
  document.body.setAttribute("data-theme", theme);
  console.log("🎨 - Body data-theme set to:", theme);

  // Load background script based on theme
  const backgroundScript = document.createElement("script");
  backgroundScript.src = isDark
    ? "../css/background-dark.js"
    : "../css/background-light.js";
  backgroundScript.onload = () =>
    console.log(`🎨 - Background script loaded: ${backgroundScript.src}`);
  backgroundScript.onerror = () =>
    console.error(`🎨 - ❌ Failed to load: ${backgroundScript.src}`);
  document.body.appendChild(backgroundScript);

  // Load color stylesheet based on theme
  const colorStylesheet = document.createElement("link");
  colorStylesheet.rel = "stylesheet";
  colorStylesheet.href = isDark
    ? "../css/colors-dark.css"
    : "../css/colors-light.css";
  colorStylesheet.id = "color-theme-stylesheet";
  colorStylesheet.onload = () =>
    console.log(`🎨 - Color stylesheet loaded: ${colorStylesheet.href}`);
  colorStylesheet.onerror = () =>
    console.error(`🎨 - ❌ Failed to load: ${colorStylesheet.href}`);
  document.head.appendChild(colorStylesheet);

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.querySelector(".theme-toggle__label");

  if (themeToggle) {
    console.log("🎨 - ✅ Theme toggle button found");

    themeToggle.addEventListener("click", () => {
      const currentTheme = localStorage.getItem("theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      console.log(`🎨 - 🔄 Switching theme: ${currentTheme} → ${newTheme}`);
      localStorage.setItem("theme", newTheme);
      location.reload(); // Reload to apply new background and styles
    });
  } else {
    console.warn("🎨 - ⚠️ Theme toggle button not found");
  }

  // Update theme label text on load
  if (themeLabel) {
    themeLabel.textContent = isDark ? "Light" : "Dark";
    console.log(`🎨 - ✅ Theme label set to: ${themeLabel.textContent}`);
  } else {
    console.warn("🎨 - ⚠️ Theme label not found");
  }

  // Background canvas click to navigate home
  const bgCanvas = document.getElementById("background-canvas");
  if (bgCanvas) {
    console.log("🎨 - ✅ Background canvas found, adding click handler");

    bgCanvas.addEventListener("click", () => {
      // Check if NOT on home page
      const isHomePage =
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/");

      if (!isHomePage) {
        console.log("🎨 - 🏠 Navigating to home from canvas click");
        location.href = "../index.html";
      } else {
        console.log("🎨 - ℹ️ Already on home page, ignoring canvas click");
      }
    });
  } else {
    console.warn("🎨 - ⚠️ Background canvas not found");
  }

  // Back to home functionality (if needed)
  const backButton = document.getElementById("back-to-home");
  if (backButton) {
    backButton.onclick = () => {
      console.log("🎨 - 🏠 Navigating to home from back button");
      location.href = "../index.html";
    };
  }

  console.log("🎨 - closing theme-loader.js");
});
