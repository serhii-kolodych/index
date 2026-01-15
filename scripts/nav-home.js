console.log("🏠 nav-home.js loaded");

const navHome = document.getElementById("navHome");
const navIcon = document.getElementById("navIcon");
const navIconExtra = document.getElementById("navIconExtra");
let isScrolled = false;

function updateNavButton() {
  const scrolled = window.scrollY > 200;

  if (scrolled !== isScrolled) {
    isScrolled = scrolled;

    if (isScrolled) {
      // Change to arrow up
      navIcon.setAttribute("d", "M12 19V5");
      navIconExtra.setAttribute("points", "5 12 12 5 19 12");
      navHome.setAttribute("aria-label", "Scroll to top");
      navHome.setAttribute("title", "Scroll to top");
    } else {
      // Change back to home
      navIcon.setAttribute("d", "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z");
      navIconExtra.setAttribute("points", "9 22 9 12 15 12 15 22");
      navHome.setAttribute("aria-label", "Back to home");
      navHome.setAttribute("title", "Back to home");
    }
  }
}

navHome.addEventListener("click", (e) => {
  if (isScrolled) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // If not scrolled, let default href="/" work
});

window.addEventListener("scroll", updateNavButton);
updateNavButton(); // Check initial state

console.log("🏠 nav-home.js closing");
