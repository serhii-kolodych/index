// Load the appropriate background script based on the whiteState
<script>
    var whiteState = localStorage.getItem('white') || '0'; // Default to '0'
    setBackgroundScript();

    function setBackgroundScript() {
        var bgScript = document.getElementById('backgroundScript');
        if (!bgScript) {
            bgScript = document.createElement('script');
            bgScript.id = 'backgroundScript';
            bgScript.src = (whiteState === '1') ? 'background-white.js' : 'background.js';
            document.body.appendChild(bgScript);
        } else {
            bgScript.src = (whiteState === '1') ? 'background-white.js' : 'background.js';
        }
    }

    function cookiesManager() {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor === 'green') {
            loadTrackingScript();
        }
    }

    function loadTrackingScript() {
        const script = document.createElement('script');
        script.src = 'tracking.js';
        script.async = true; // Optional, to load asynchronously
        script.onerror = function() {
            console.error("Failed to load tracking.js");
        };
        document.head.appendChild(script);
    }

    function applyButtonStyles() {
        const savedColor = localStorage.getItem('buttonColor');
        const savedDateTime = localStorage.getItem('dateTime');
        const feedbackMessage = document.getElementById('feedbackMessage');

        if (savedDateTime) {
            feedbackMessage.textContent = savedDateTime;
            feedbackMessage.style.display = 'block';
        }

        if (savedColor) {
            document.querySelectorAll('.response-button').forEach(button => {
                button.classList.toggle('active', button.dataset.color === savedColor);
            });
            const message = savedColor === 'green'
                ? 'You agreed to use cookies on your device. Date and time:'
                : 'You blocked this site from saving cookies on your device. Date and time:';
            showFeedback(message);
        }
    }

    function showFeedback(message) {
        const feedbackMessage = document.getElementById('feedbackMessage');
        const dateTime = new Date().toLocaleString();
        const fullMessage = `${message} ${dateTime}`;
        localStorage.setItem('dateTime', fullMessage);
        feedbackMessage.textContent = fullMessage;
        feedbackMessage.style.display = 'block';
    }

    function handleButtonClick(color) {
        const message = color === 'green'
            ? 'You agreed to use cookies on your device. Date and time:'
            : 'You blocked this site from saving cookies on your device. Date and time:';

        localStorage.setItem('buttonColor', color);
        applyButtonStyles();
        showFeedback(message);

        if (color === 'green') {
            loadTrackingScript();
            console.log("yes tracking.js 🍀 🐸");
        }
    }

    document.getElementById('yesButton').addEventListener('click', function() {
        handleButtonClick('green');
    });
    document.getElementById('noButton').addEventListener('click', function() {
        handleButtonClick('red');
    });

    window.onload = function() {
        applyButtonStyles();
        cookiesManager();
        setInitialStyle();
    };

    function setInitialStyle() {
        var currentStyle = (whiteState === '1') ? 'styles-white.css' : 'styles.css';
        document.getElementById('stylesheet').setAttribute('href', currentStyle);

        document.addEventListener('DOMContentLoaded', function() {
            var link = document.getElementById('change-style-link');
            link.textContent = (whiteState === '1') ? "Matrix" : "White";
            link.addEventListener('click', function(e) {
                e.preventDefault();
                whiteState = (whiteState === '0') ? '1' : '0'; // Toggle state
                currentStyle = (whiteState === '1') ? 'styles-white.css' : 'styles.css';
                link.textContent = (whiteState === '1') ? "Matrix" : "White"; 
                document.getElementById('stylesheet').setAttribute('href', currentStyle);
                localStorage.setItem('white', whiteState);
                setBackgroundScript();
                location.reload();
            });
        });
    }
</script>
