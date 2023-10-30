document.addEventListener('DOMContentLoaded', function() {

    const menuStreams = document.querySelectorAll('.menuStream');
    let currentDirectory = '';
    const typingSpeed = 150;
    let promiseChain = Promise.resolve();
    const typingSound = document.getElementById('typingAudio');
    const printSound = document.getElementById('printAudio');

    function typeCommand(command, element, streamText) {
        console.log("Starting typeCommand function."); // Diagnostic log
        return new Promise((resolve) => {
            let typedCommand = '';
            let charIndex = 0;

            // Play the typing sound
            typingSound.play();

            const typingInterval = setInterval(() => {
                typedCommand += command[charIndex];
                element.innerHTML = `PS C:\\${currentDirectory || streamText}> ${typedCommand}<span class="consoleCursor"></span>`;

                charIndex++;

                if (charIndex === command.length) {
                    clearInterval(typingInterval);
                    
                    // Stop the typing sound
                    typingSound.pause();
                    typingSound.currentTime = 0;

                    resolve();
                }
            }, typingSpeed);
        });
    }

    function displaySubmenuItems(consoleElement) {
        console.log("Starting displaySubmenuItems function."); // Diagnostic log
        return new Promise((resolve) => {
            const submenuItems = ['Submenu Item 1', 'Submenu Item 2', 'Submenu Item 3'];
            
            // Play the print sound
            printSound.currentTime = 0;
            printSound.play();
    
            submenuItems.forEach((item, index) => {
                setTimeout(() => {
                    const itemDiv = document.createElement('div');
                    itemDiv.textContent = item;
                    consoleElement.appendChild(itemDiv);
                    if (index === submenuItems.length - 1) {
                        resolve();
                    }
                }, (index + 1) * 500);
            });
        });
    }

   function clickHandler(event) {
    console.log("Matrix menu item clicked."); // Diagnostic log

    event.stopPropagation();

    // Hide all open consoles
    document.querySelectorAll('.console').forEach((consoleElem) => {
        consoleElem.style.display = 'none';
    });

    // Find the parent .menuStream of the clicked .menuMatrixText
    const stream = this.closest('.menuStream');
    console.log("Clicked element:", this);
    console.log("Closest .menuStream found:", stream);
    console.log("Children of .menuStream:", stream.children);

    // Get the console element for the clicked menu stream
    const consoleElement = stream.querySelector('.console');

    if (!consoleElement) {
        console.error("Console element not found for stream:", stream);
        return;
    }

    // Use the firstChild's nodeValue to get the menu item's name
    const streamText = this.firstChild.nodeValue.trim();
    const commandToType = currentDirectory === streamText ? 'DIR' : `CD C:\\${streamText}`;

    console.debug(`Menu item clicked: ${streamText}`);

    promiseChain = promiseChain
        .then(() => {
            console.log("Clearing console content."); // Diagnostic log
            consoleElement.innerHTML = ''; // Clear the console's content
            consoleElement.style.display = 'block';
            const initialCommandDiv = document.createElement('div');
            consoleElement.appendChild(initialCommandDiv);
            return typeCommand(commandToType, initialCommandDiv, streamText);
        })
        .then(() => {
            console.log("Displaying submenu items."); // Diagnostic log
            if (commandToType.startsWith('CD')) {
                currentDirectory = streamText;
            }
            return displaySubmenuItems(consoleElement);
        })
        .catch(error => {
            console.error("Error in promise chain:", error); // Catch any errors in the promise chain
        });
}


    // Attach the clickHandler to the .menuMatrixText elements
    const matrixTextElements = document.querySelectorAll('.menuMatrixText');
    matrixTextElements.forEach((matrixText) => {
        matrixText.addEventListener('click', clickHandler);
    });

    // Play sound function
    function playSound() {
        console.log("Play sound button clicked. Attempting to play sound...");
        typingSound.play();
        typingSound.addEventListener('play', () => {
            console.log("Sound is playing.");
        });
        typingSound.addEventListener('error', (e) => {
            console.log("Error playing sound:", e);
        });
    }
});
