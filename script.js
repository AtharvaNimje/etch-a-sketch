let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'classic';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

let grid = document.getElementById('grid');
let classic = document.getElementById('classic');
let rainbow = document.getElementById('rainbow');
let eraser = document.getElementById('eraser');

function setUpGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}

function activateButton(newMode) {
    if (currentMode === 'classic') {
        classic.classList.remove('active');
    } else if(currentMode === 'rainbow') {
        rainbow.classList.remove('active');
    } else if(currentMode === 'eraser') {
        eraser.classList.remove('active');
    }

    if (newMode === 'classic') {
        classic.classList.add('active');
    } else if(newMode === 'rainbow') {
        rainbow.classList.add('active');
    } else if(newMode === 'eraser') {
        eraser.classList.add('active');
    }
}

window.onload = () => {
    setUpGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
}