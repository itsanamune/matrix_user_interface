
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
// close_buttons.js
const closeButtons = document.querySelectorAll('.consoleCloseButton');

    try {
        // Get all the close buttons
       

        // Log the number of close buttons found
        console.log(`Found ${closeButtons.length} close buttons.`);

        // Add a click event listener to each close button
        closeButtons.forEach((button, index) => {
            button.addEventListener('click', function(event) {
                // Stop the event from bubbling up to the parent elements
                event.stopPropagation();

                // Hide the parent console
                this.parentElement.style.display = 'none';

                // Log which button was clicked
                console.log(`Close button ${index + 1} clicked. Parent console should be hidden.`);
            });
        });
    } catch (error) {
        // Log any errors that occur
        console.error('An error occurred:', error);
    }
});