document.addEventListener("DOMContentLoaded", function () {
  var whiteState = localStorage.getItem("white") || "0";
  var currentStyle =
    whiteState === "1" ? "../styles-white.css" : "../styles.css";
  var stylesheet = document.getElementById("stylesheet");

  if (stylesheet) {
    stylesheet.setAttribute("href", currentStyle);
  }

  var link = document.getElementById("change-style-link");
  if (link) {
    link.textContent = whiteState === "1" ? "Matrix" : "White";

    link.addEventListener("click", function (e) {
      e.preventDefault();
      whiteState = whiteState === "0" ? "1" : "0";
      currentStyle =
        whiteState === "1" ? " ../styles-white.css" : "../styles.css";
      localStorage.setItem("white", whiteState);
      link.textContent = whiteState === "1" ? "Matrix" : "White";
      if (stylesheet) stylesheet.setAttribute("href", currentStyle);
      location.reload();
    });
  }
});

// // Set the initial style based on local storage
// var currentStyle = (whiteState === '1') ? 'styles-white.css' : 'styles.css';
// document.getElementById('stylesheet').setAttribute('href', currentStyle);

// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById('change-style-link');
//     var stylesheet = document.getElementById('stylesheet');

//     // Set the link text based on the current style
//     link.textContent = (whiteState === '1') ? "Matrix" : "White";

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         // Toggle the style state
//         whiteState = (whiteState === '0') ? '1' : '0'; // Toggle state
//         currentStyle = (whiteState === '1') ? 'styles-white.css' : 'styles.css';
//         link.textContent = (whiteState === '1') ? "Matrix" : "White";

//         // Update the stylesheet and local storage
//         stylesheet.setAttribute('href', currentStyle);
//         localStorage.setItem('white', whiteState); // Save the current state

//         // Change the background script source
//         var bgScript = document.getElementById('backgroundScript');
//         bgScript.src = (whiteState === '1') ? 'background-white.js' : 'background.js';

//         // Refresh the page to load the new background script
//         location.reload();
//     });
// });
