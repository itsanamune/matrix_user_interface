document.addEventListener('DOMContentLoaded', () => {
    console.log("Starting matrix menu effect logic...");

    const menuStreamElements = document.querySelectorAll('.menuStream');

    menuStreamElements.forEach((streamElement) => {
        const menuTextElement = streamElement.querySelector('.menuMatrixText');
        const originalText = menuTextElement.textContent.trim();
        const textArray = originalText.split('');

        // Initially hide the characters
        menuTextElement.textContent = ' '.repeat(textArray.length);

        // Start revealing the original text after a short delay
        let iteration = 0;
        const revealInterval = setInterval(() => {
            if (iteration < textArray.length) {
                menuTextElement.textContent = menuTextElement.textContent.substr(0, iteration) + textArray[iteration] + ' '.repeat(textArray.length - iteration - 1);
                iteration++;
            } else {
                clearInterval(revealInterval);
                startMatrixEffect(menuTextElement, originalText);
            }
        }, 200);  // Adjust the interval as needed for the speed of text reveal
    });
    
    

    // Select the menu
    const menu = document.querySelector('#menuOverlay');

    

    // Add an event listener to each menu item
    menuStreamElements.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            // Hide the menu
            menu.classList.remove('open');

            // Show the corresponding console
            // You will need to implement this part based on how your consoles are structured
        });
    });
});

function startMatrixEffect(element, originalText) {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * originalText.length);
        const char = (Math.random() > 0.8) ? getRandomCharacter() : originalText.charAt(randomIndex);
        const newText = originalText.substr(0, randomIndex) + char + originalText.substr(randomIndex + 1);
        element.textContent = newText;
    }, 250);
}

function getRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

document.addEventListener("DOMContentLoaded", function() {
    var draggables = document.querySelectorAll('.draggable');
    
    draggables.forEach(function(draggable) {
        var offsetX, offsetY;
        
        draggable.onmousedown = function(event) {
            offsetX = event.clientX - getComputedStyle(draggable).left.slice(0, -2);
            offsetY = event.clientY - getComputedStyle(draggable).top.slice(0, -2);

            document.onmousemove = function(event) {
                draggable.style.left = (event.clientX - offsetX) + 'px';
                draggable.style.top = (event.clientY - offsetY) + 'px';
            };

            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };

        draggable.ondragstart = function() {
            return false; // prevent default drag-and-drop action
        };
    });
});