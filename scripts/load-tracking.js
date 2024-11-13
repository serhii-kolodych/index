// Load tracking.js if user has agreed
window.onload = function() {
    if (localStorage.getItem('buttonColor') === 'green') {
        var script = document.createElement('script');
        script.src = "../tracking.js"; // Path to your tracking.js file
        document.head.appendChild(script);
    }
};