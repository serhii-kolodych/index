// Array to keep track of loaded scripts
var loadedScripts = [];

// Function to load external scripts dynamically and track them
function loadScript(src, async = true) {
    var script = document.createElement('script');
    script.src = src;
    script.async = async;
    document.head.appendChild(script);

    // Track the script element for future removal
    loadedScripts.push(script);
    console.log('🪲 scripts loaded successfully.');
}

// Function to load the tracking scripts
function loadTrackingScripts() {
    // Load Google Tag Manager
    loadScript('<!-- YOUR_GOOGLE_TAG_MANAGER_CODE_GOES_HERE -->');

    // Configure Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '<!-- YOUR_G-CODELIKE-THISPROFILE_ID__GOES_HERE -->');

    // Load Microsoft Clarity
    loadScript('<!-- YOUR_CLARITY_CODE_GOES_HERE -->');
}

// Expose the function globally to ensure it's accessible
window.loadTrackingScripts = loadTrackingScripts;
