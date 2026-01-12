//   <!-- navigation buttons  -->
console.log("↔️ - loading navigation-arrows.js");
// Chapter Navigation
class ChapterNavigator {
  constructor() {
    this.chapters = [];
    this.currentIndex = -1; // Start at -1 to represent "intro" (displays as 0)
    this.init();
  }

  init() {
    // Get all h2 headings with IDs
    this.chapters = Array.from(document.querySelectorAll(".post-section[id]"));

    if (this.chapters.length === 0) return;

    // Update total chapters
    document.getElementById("total-chapters").textContent =
      this.chapters.length;

    // Set initial state (intro section = 0)
    this.updateCurrentChapter(-1);

    // Set up navigation buttons
    document
      .getElementById("prev-chapter")
      .addEventListener("click", () => this.goToPrev());
    document
      .getElementById("next-chapter")
      .addEventListener("click", () => this.goToNext());

    // Track current chapter on scroll
    window.addEventListener("scroll", () => this.trackScrollPosition());
  }

  trackScrollPosition() {
    const scrollPosition = window.scrollY + 32; // Offset for header

    // Check if we're before the first chapter (intro section)
    if (scrollPosition < this.chapters[0].offsetTop) {
      this.updateCurrentChapter(-1);
      return;
    }

    // Check which chapter we're in
    for (let i = 0; i < this.chapters.length; i++) {
      const chapter = this.chapters[i];
      const chapterTop = chapter.offsetTop;
      const chapterBottom = chapterTop + chapter.offsetHeight;

      if (scrollPosition >= chapterTop && scrollPosition < chapterBottom) {
        this.updateCurrentChapter(i);
        break;
      }
    }
  }

  updateCurrentChapter(index) {
    this.currentIndex = index;

    // Display as index + 1 (so -1 becomes 0, 0 becomes 1, etc.)
    document.getElementById("current-chapter").textContent = index + 1;

    // Update button states
    const prevBtn = document.getElementById("prev-chapter");
    const nextBtn = document.getElementById("next-chapter");

    prevBtn.disabled = index === -1; // Disable prev when at intro
    nextBtn.disabled = index === this.chapters.length - 1; // Disable next at last chapter
  }

  goToPrev() {
    if (this.currentIndex > -1) {
      if (this.currentIndex === 0) {
        // Go back to intro (top of page)
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        this.updateCurrentChapter(-1);
      } else {
        this.scrollToChapter(this.currentIndex - 1);
      }
    }
  }

  goToNext() {
    if (this.currentIndex < this.chapters.length - 1) {
      this.scrollToChapter(this.currentIndex + 1);
    }
  }

  scrollToChapter(index) {
    const chapter = this.chapters[index];
    const headerOffset = 30; // Offset for fixed header
    const elementPosition = chapter.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    this.updateCurrentChapter(index);
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ChapterNavigator();
});

console.log("↔️ - closing navigation-arrows.js");
