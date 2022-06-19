let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'classic';
let DEFAULT_COLOR = '#333333';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

let grid = document.getElementById('grid');
let classic = document.getElementById('classic');
let rainbow = document.getElementById('rainbow');
let eraser = document.getElementById('eraser');
let gridSize = document.getElementById('grid-size');
let sizeSlider = document.getElementById('size-slider');

function setCurrentSize(size) {
    currentSize = size;
}

function setUpGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.onclick = () => changeColor();
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

    currentMode = newMode;

    if (newMode === 'classic') {
        classic.classList.add('active');
    } else if(newMode === 'rainbow') {
        rainbow.classList.add('active');
    } else if(newMode === 'eraser') {
        eraser.classList.add('active');
    }
}

function changeSize(e) {
    gridSize.innerHTML = `${e.target.value} x ${e.target.value}`;
    clearGrid();
    setUpGrid(e.target.value);
}

function changeColor() {
    // to do
}

function clearGrid() {
    grid.innerHTML = '';
}

classic.onclick = (e) => {activateButton('classic')};
rainbow.onclick = (e) => {activateButton('rainbow')};
eraser.onclick = (e) => {activateButton('eraser')};
sizeSlider.onchange = (e) => {changeSize(e)};

window.onload = () => {
    setUpGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
}