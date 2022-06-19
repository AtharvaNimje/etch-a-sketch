let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'classic';
let DEFAULT_COLOR = '#333333';

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

let colorPick = document.getElementById('color-pick');
let grid = document.getElementById('grid');
let classic = document.getElementById('classic');
let rainbow = document.getElementById('rainbow');
let eraser = document.getElementById('eraser');
let clear = document.getElementById('clear');
let gridSize = document.getElementById('grid-size');
let sizeSlider = document.getElementById('size-slider');

let mousedown = false;
document.body.onmousedown = () => mousedown = true;
document.body.onmouseup = () => mousedown = false;

function setCurrentSize(size) {
    currentSize = size;
}

function setUpGrid(size) {
    currentSize = size;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
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
    clearGrid();
    setUpGrid(e.target.value);
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mousedown) return;

    if(currentMode === 'classic') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#ffffff';
    } else if (currentMode === 'rainbow') {
        let R = Math.floor(Math.random() * (256));
        let G = Math.floor(Math.random() * (256));
        let B = Math.floor(Math.random() * (256));
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
    
}

function clearGrid() {
    grid.innerHTML = '';
}

colorPick.onchange = (e) => currentColor = e.target.value;
classic.onclick = (e) => {activateButton('classic')};
rainbow.onclick = (e) => {activateButton('rainbow')};
eraser.onclick = (e) => {activateButton('eraser')};
sizeSlider.onchange = (e) => {changeSize(e)};
sizeSlider.oninput = (e) => gridSize.innerHTML = `${e.target.value} x ${e.target.value}`;

clear.onclick = (e) => {
    clearGrid();
    setUpGrid(currentSize);
}

window.onload = () => {
    setUpGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
}