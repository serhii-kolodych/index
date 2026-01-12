//   <!-- clipboard js --2nd of 2 parts -->
console.log("👯‍♀️ - loading clipboard-copied.js");
// Initialize clipboard for all copy buttons
var clipboard = new ClipboardJS(".code-block__copy-btn");

// Optional: Show feedback when copied
clipboard.on("success", function (e) {
  const btn = e.trigger;
  const originalText = btn.querySelector(".copy-btn__text").textContent;

  btn.querySelector(".copy-btn__text").textContent = "Copied!";

  setTimeout(() => {
    btn.querySelector(".copy-btn__text").textContent = originalText;
  }, 2000);

  e.clearSelection();
});

clipboard.on("error", function (e) {
  console.error("Copy failed:", e);
  alert("Failed to copy. Please copy manually.");
});

console.log("👯‍♀️ - closing clipboard-copied.js");
