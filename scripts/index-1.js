// Load the appropriate background script based on the whiteState -->
var whiteState = localStorage.getItem('white') || '0'; // Default to '0'
var bgScript = document.createElement('script');
bgScript.id = 'backgroundScript'; // Set an ID for the script
bgScript.src = (whiteState === '1') ? 'background-white.js' : 'background.js';
document.body.appendChild(bgScript); // Append the background script