//   toc links 100 px above margin
console.log("📋 - loading table-of-content-scroll.js");
// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ChapterNavigator();

  // Handle TOC links with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#" or doesn't have a target
      if (href === "#" || href.length <= 1) return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerOffset = 30; // Same offset as chapter navigation
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

console.log("📋 - closing table-of-content-scroll.js");
