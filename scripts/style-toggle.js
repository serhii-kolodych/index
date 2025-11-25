document.addEventListener("DOMContentLoaded", function () {
  // Set the initial style based on local storage
  var whiteState = localStorage.getItem("white") || "0"; // Default to '0'
  var currentStyle =
    whiteState === "1" ? "../styles-white.css" : "../styles.css";
  var stylesheet = document.getElementById("stylesheet");

  stylesheet.setAttribute("href", currentStyle);
  console.log("Initial whiteState:", whiteState, "currentStyle:", currentStyle);

  // Control the canvas visibility
  var canvas = document.getElementById("c");
  canvas.style.opacity = whiteState === "1" ? "0" : "1";
  console.log("Canvas initial opacity:", canvas.style.opacity);

  var link = document.getElementById("change-style-link");

  link.textContent = whiteState === "1" ? "Matrix" : "White";
  console.log("Link initial text:", link.textContent);

  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Link clicked. Previous whiteState:", whiteState);

    if (whiteState === "0") {
      whiteState = "1";
      currentStyle = "../styles-white.css";
      canvas.style.opacity = "0";
      link.textContent = "Matrix";
    } else {
      whiteState = "0";
      currentStyle = "../styles.css";
      canvas.style.opacity = "1";
      link.textContent = "White";
    }

    stylesheet.setAttribute("href", currentStyle);
    localStorage.setItem("white", whiteState);

    console.log(
      "New whiteState:",
      whiteState,
      "currentStyle:",
      currentStyle,
      "Canvas opacity:",
      canvas.style.opacity,
      "Link text:",
      link.textContent
    );
  });
});

// // Set the initial style based on local storage
// var whiteState = localStorage.getItem("white") || "0"; // Default to '0'
// var currentStyle = whiteState === "1" ? "../styles-white.css" : "../styles.css";
// document.getElementById("stylesheet").setAttribute("href", currentStyle);
// console.log("Initial whiteState:", whiteState, "currentStyle:", currentStyle);

// // Control the canvas visibility based on the initial stylesheet
// var canvas = document.getElementById("c");
// canvas.style.opacity = whiteState === "1" ? "0" : "1";
// console.log("Canvas initial opacity:", canvas.style.opacity);

// document.addEventListener("DOMContentLoaded", function () {
//   var link = document.getElementById("change-style-link");
//   var stylesheet = document.getElementById("stylesheet");

//   // Set the link text based on the current style
//   link.textContent = whiteState === "1" ? "Matrix" : "White";
//   console.log("Link initial text:", link.textContent);

//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Link clicked. Previous whiteState:", whiteState);

//     // Toggle the style state
//     if (whiteState === "0") {
//       whiteState = "1"; // Switch to white stylesheet
//       currentStyle = "../styles-white.css";
//       canvas.style.opacity = "0"; // Hide the canvas
//       link.textContent = "Matrix";
//     } else {
//       whiteState = "0"; // Switch back to default stylesheet
//       currentStyle = "../styles.css";
//       canvas.style.opacity = "1"; // Show the canvas
//       link.textContent = "White";
//     }

//     // Update the stylesheet and local storage
//     stylesheet.setAttribute("href", currentStyle);
//     localStorage.setItem("white", whiteState); // Save the current state

//     console.log(
//       "New whiteState:",
//       whiteState,
//       "currentStyle:",
//       currentStyle,
//       "Canvas opacity:",
//       canvas.style.opacity,
//       "Link text:",
//       link.textContent
//     );
//   });
// });

// // Set the initial style based on local storage
// var whiteState = localStorage.getItem('white') || '0'; // Default to '0'
// var currentStyle = (whiteState === '1') ? '../styles-white.css' : '../styles.css';
// document.getElementById('stylesheet').setAttribute('href', currentStyle);

// // Control the canvas visibility based on the initial stylesheet
// var canvas = document.getElementById('c');
// canvas.style.opacity = (whiteState === '1') ? "0" : "1";

// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById('change-style-link');
//     var stylesheet = document.getElementById('stylesheet');

//     // Set the link text based on the current style
//     link.textContent = (whiteState === '1') ? "Matrix" : "White";

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         // Toggle the style state
//         if (whiteState === '0') {
//             whiteState = '1'; // Switch to white stylesheet
//             currentStyle = '../styles-white.css';
//             canvas.style.opacity = "0"; // Hide the canvas
//             link.textContent = "Matrix";
//         } else {
//             whiteState = '0'; // Switch back to default stylesheet
//             currentStyle = '../styles.css';
//             canvas.style.opacity = "1"; // Show the canvas
//             link.textContent = "White";
//         }

//         // Update the stylesheet and local storage
//         stylesheet.setAttribute('href', currentStyle);
//         localStorage.setItem('white', whiteState); // Save the current state
//     });
// });
