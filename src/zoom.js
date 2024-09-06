document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove the zoomed class from any previously zoomed item
        const zoomedItem = document.querySelector('.item.zoomed');
        if (zoomedItem) {
            zoomedItem.classList.remove('zoomed');
            removeCloseButton(zoomedItem);
        }

        // Add the zoomed class to the clicked item
        this.classList.add('zoomed');

        // Create and add the close button
        addCloseButton(this);
    });
});

function addCloseButton(item) {
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;'; // '×' symbol
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent triggering the item click event
        item.classList.remove('zoomed');
        removeCloseButton(item);

        // Show all items again
        document.querySelectorAll('.item').forEach(function(item) {
            item.style.display = 'inline-block';
        });
    });
    item.appendChild(closeButton);
}

function removeCloseButton(item) {
    const closeButton = item.querySelector('.close-btn');
    if (closeButton) {
        item.removeChild(closeButton);
    }
}
