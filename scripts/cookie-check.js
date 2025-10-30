window.onload = function () {
  console.log("🤖 checking cookies 🍪");

  if (localStorage.getItem("buttonColor") === "green") {
    console.log("🐸 savedColor === green - yes tracking.js 🍀 🐸");
    const script = document.createElement("script");
    script.src = "/scripts/tracking.js";
    document.head.appendChild(script);
    script.onload = () =>
      console.log("🐸 tracking.js loaded successfully! 🍀 🐸");
  } else {
    console.log("🚨 savedColor === not Green - NO TRACKING 🔴");
    console.log("🛑 tracking.js NOT loaded 🛑");
  }
};

// <!-- Cookies Load or NOT -->
// <script>

//     window.onload = function() {
//         console.log("🤖 checking cookies 🍪");

//         if (localStorage.getItem('buttonColor') === 'green') {
//             console.log("🐸 savedColor === green - yes tracking.js 🍀 🐸");
//             var script = document.createElement('script');
//             script.src = "tracking.js";
//             document.head.appendChild(script);
//             console.log("🐸 tracking.js loaded sucessfully! 🍀 🐸");
//         } else {
//             console.log("🚨 savedColor === not Green - NO TRACKING 🔴");
//             console.log("🛑 tracking.js NOT loaded 🛑");
//         }
//     };

// console.log("🤖 checking cookies 🍪")
// // Load tracking.js if user has agreed
// window.onload = function() {
//     if (localStorage.getItem('buttonColor') === 'green') {
//         console.log("🐸 savedColor === green - yes tracking.js 🍀 🐸");
//         var script = document.createElement('script');
//         script.src = "tracking.js"; // Path to your tracking.js file
//         document.head.appendChild(script);
//         console.log("🐸 tracking.js loaded sucessfully! 🍀 🐸");
//     }
//     else{
//         console.log("🚨 savedColor === not Green - NO TRACKING 🔴");
//     }
// };
// </script>
