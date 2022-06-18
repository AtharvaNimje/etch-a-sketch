let DEFAULT_SIZE = 16;
let DEFAULT_MODE = 'classic';

let grid = document.getElementById('grid');

function setUpGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i<size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}

window.onload = () => {
    setUpGrid(DEFAULT_SIZE);
    //activateButton(DEFAULT_MODE)
}