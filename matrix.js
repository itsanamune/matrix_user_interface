const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Characters for the matrix rain
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let columns; // Number of columns for the rain
let drops; // An array of drops - one per column

// Initialize the matrix effect
function initializeMatrix() {
    // Full screen dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Number of columns for the rain
    columns = canvas.width / 10; // 10px width per character

    // An array of drops - one per column
    drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
}

// The main draw function
function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = '10px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 10, drops[i] * 10);

        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Resize and draw again
function resizeCanvas() {
    initializeMatrix();
    drawMatrixRain();
}

// Initialize and start the matrix effect
initializeMatrix();
window.addEventListener('resize', resizeCanvas);
setInterval(drawMatrixRain, 33); // 30fps
