document.addEventListener('DOMContentLoaded', () => {
    fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            const memeContainer = document.getElementById('meme-container');
            const memeTitle = document.createElement('h3');
            const memeImage = document.createElement('img');
            const memeLink = document.createElement('a');

            memeTitle.textContent = data.title;
            memeImage.src = data.url;
            memeLink.href = data.postLink;
            memeLink.target = '_blank';
            memeLink.textContent = "View on Reddit";

            memeContainer.appendChild(memeTitle);
            memeContainer.appendChild(memeImage);
            memeContainer.appendChild(memeLink);
        })
        .catch(error => console.error('Error fetching meme:', error));
});
