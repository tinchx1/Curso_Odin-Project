document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid-container");
    const sideLength = 16;

    // Establecer el tamaño de la cuadrícula como una variable CSS
    document.documentElement.style.setProperty('--side-length', sideLength);

    for (let i = 0; i < sideLength * sideLength; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
    // Establecer el tamaño de la cuadrícula como una variable CSS

    let isDrawing = false;

    gridContainer.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    

    gridContainer.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    gridContainer.addEventListener('mousemove', sketch);

    function sketch(event) {
        if (!isDrawing) return;

        const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);

        if (hoveredElement && hoveredElement.classList.contains('grid-item')) {
            hoveredElement.style.backgroundColor = '#3498db';
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid-container");
    const pixelRange = document.getElementById("pixelRange");
    const btnNewGrid = document.getElementById("btnNewGrid");
    const colorPicker = document.getElementById("colorPicker");

    pixelRange.addEventListener("input", updateGrid);
    colorPicker.addEventListener("input", updateColor);

    // Crear cuadrícula inicial
    createGrid(16); // Tamaño inicial

    btnNewGrid.addEventListener('click', askForGridSize);

    function askForGridSize() {
        updateGrid();
    }

    function updateGrid() {
        let gridSize = pixelRange.value;

        // Eliminar la cuadrícula existente
        clearGrid();

        // Crear una nueva cuadrícula con el tamaño especificado por el usuario
        createGrid(gridSize);
    }

    function updateColor() {
        // No necesitas establecer nada aquí para cambiar el color del rastro dinámicamente.
    }

    function createGrid(sideLength) {
        // Establecer el tamaño de la cuadrícula como una variable CSS
        document.documentElement.style.setProperty('--side-length', sideLength);

        // Crear una cuadrícula de NxN
        for (let i = 0; i < sideLength * sideLength; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
        }
    }

    function clearGrid() {
        // Eliminar todos los elementos hijos del contenedor
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }

    let isDrawing = false;

    gridContainer.addEventListener('mousedown', () => {
        isDrawing = true;
    });

    gridContainer.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    gridContainer.addEventListener('mousemove', sketch);

    function sketch(event) {
        if (!isDrawing) return;

        const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);

        if (hoveredElement && hoveredElement.classList.contains('grid-item')) {
            hoveredElement.style.backgroundColor = colorPicker.value;
        }
    }
});




