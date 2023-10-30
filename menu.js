// Matrix menu effect logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Starting matrix menu effect logic...");

    const menuStreamElements = document.querySelectorAll('.menuStream');

    menuStreamElements.forEach((streamElement) => {
        const menuTextElement = streamElement.querySelector('.menuMatrixText');
        const originalText = menuTextElement.textContent.trim();
        const textArray = originalText.split('');

        // Create an array with the same length as the original text but filled with random characters
        let randomCharArray = Array.from({ length: textArray.length }, () => getRandomCharacter());

        // Initially display random characters
        menuTextElement.textContent = randomCharArray.join('');

        // Start revealing the original text after a short delay
        let iteration = 0;

        const interval = setInterval(() => {
            if (iteration < textArray.length) {
                randomCharArray[iteration] = textArray[iteration];
                menuTextElement.textContent = randomCharArray.join('');
                iteration++;
            } else {
                clearInterval(interval);
                // Continue the matrix rain effect or any other effects if needed
            }
        }, 100);  // Adjust the interval as needed for the speed of text reveal
    });
});

function getRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}
