// Select all copy buttons
document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', function() {
    const copyButton = this;
    
    // Find the nearest code element in the same container
    const codeText = copyButton.closest('.grid-container').querySelector('.code-row code').textContent;
    
    // Copy the code text to clipboard
    navigator.clipboard.writeText(codeText).then(() => {
      // Change the button text to "Copied!"
      copyButton.textContent = 'Copied!';
      
      // Revert the text back to "Copy Code" after 3 seconds
      setTimeout(() => {
        copyButton.textContent = 'Copy Code';
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
});
