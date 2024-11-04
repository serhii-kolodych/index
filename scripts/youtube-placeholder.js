document.querySelectorAll('.youtube-placeholder').forEach(function(element) {
    element.addEventListener('click', function() {
        const videoId = element.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.title = "YouTube Video";
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        element.innerHTML = ''; // Clear placeholder
        element.appendChild(iframe); // Add iframe to the placeholder
    });
});
