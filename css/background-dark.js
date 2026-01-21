(function () {
  console.log("🎬 - loading background-dark.js");

  let animationInterval = null;
  let isAnimating = false;
  let resizeHandler = null;
  let visibilityHandler = null;

  function startMatrixAnimation() {
    // Prevent multiple instances
    if (isAnimating) {
      console.log("🎬 - Animation already running, skipping...");
      return;
    }

    const canvas = document.getElementById("background-canvas");

    if (!canvas) {
      console.error("🎬 - ❌ Background canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    console.log("🎬 - ✅ Canvas resized:", canvas.width, "x", canvas.height);

    // Matrix characters
    const matrix =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 7;
    let columns = canvas.width / fontSize;
    let drops = [];

    // Initialize drops
    function initDrops() {
      columns = canvas.width / fontSize;
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    }

    initDrops();

    function draw() {
      // Black BG for the canvas, translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = "#42f460";
      ctx.font = fontSize + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y coordinate with variable speed
        drops[i] += Math.random() + 0.56;
      }
    }

    // Start animation
    animationInterval = setInterval(draw, 23);
    isAnimating = true;
    console.log("🎬 - Matrix animation started!");

    // Handle window resize
    resizeHandler = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      initDrops();
      console.log("🎬 - Canvas resized:", canvas.width, "x", canvas.height);
    };

    window.addEventListener("resize", resizeHandler);

    // Cleanup function
    function cleanup() {
      if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
      }
      isAnimating = false;
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      console.log("🎬 - Animation stopped and cleaned up");
    }

    // Cleanup on beforeunload
    window.addEventListener("beforeunload", cleanup, { once: true });

    // Return cleanup function for manual cleanup if needed
    return cleanup;
  }

  // Cleanup function (stops animation)
  function stopAnimation() {
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
    isAnimating = false;
    console.log("🎬 - Animation paused");
  }

  // Handle visibility changes (tab switching, new tab opened)
  visibilityHandler = () => {
    if (document.hidden) {
      // Tab is hidden - stop animation to save resources
      stopAnimation();
      console.log("🎬 - Tab hidden, stopping animation");
    } else {
      // Tab is visible again - restart animation
      console.log("🎬 - Tab visible, restarting animation");
      startMatrixAnimation();
    }
  };

  document.addEventListener("visibilitychange", visibilityHandler);

  // Start animation immediately
  startMatrixAnimation();

  // Re-run when DOM is fully loaded (in case of late script execution)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startMatrixAnimation);
  }

  // Listen for page show event (handles back/forward navigation)
  window.addEventListener("pageshow", (event) => {
    // event.persisted is true when page is loaded from cache (back/forward)
    if (event.persisted) {
      console.log("🎬 - Page restored from cache, restarting animation");
      startMatrixAnimation();
    }
  });

  // For SPA frameworks (optional - detect URL changes)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      console.log("🎬 - URL changed, checking for canvas...");
      // Small delay to ensure DOM is updated
      setTimeout(startMatrixAnimation, 100);
    }
  }).observe(document, { subtree: true, childList: true });
})();

console.log("🎬 - closing background-dark.js");
