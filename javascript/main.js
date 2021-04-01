const gridContainer = document.getElementById("grid-container");


// Add 16 x 16 cells to create grid
paintGrid(16);

// Define 'paint grid' feature to create grid with given dimensions
function paintGrid(squareCount) {
    // Remove all cells in grid
    gridContainer.innerHTML = "";

    // Recreate cells in grid
    for (let i = 0; i < squareCount; i++) {
        /* Create a single role of cell elements
            Creating cells row by row allows cells to flex to equal width and height*/
        let gridRow = document.createElement("div");
        gridRow.className="grid-row";
        for (let j = 0; j < squareCount; j++) {
            // Create cell elements to add to row
            let gridCell = document.createElement("div");
            gridCell.className="grid-cell";
            gridRow.appendChild(gridCell);
        }
        // Add single row of cell elements to grid
        gridContainer.appendChild(gridRow);
    }
}

// Add 'hover' effect to grid cells
gridContainer.addEventListener('mouseover', handleMouseover);

function handleMouseover(e) {
    e.target.style.backgroundColor = `rgba(${222}, ${222}, ${111}, 0.33)`;
}


// Add 'reset' functionality through button "reset-btn"
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener('click', handleReset);

function handleReset() {
    removeColor(gridCells);
    resetGridSquareCount();
}

// Use querySelector to obtain a static NodeList to iterate over for removal of color
const gridCells = document.querySelectorAll(".grid-cell");

// Define 'remove color' feature for erasing all drawing on grid
function removeColor(cells) {
    cells.forEach(cell => {
        cell.style.backgroundColor = "pink";
    });
}

// Define 'reset grid square count' feature for repainting grid with new dimensions
function resetGridSquareCount() {
    let squareCount = 0;
    while (squareCount < 1 || squareCount > 100) {
        squareCount = prompt("How many squares?");
    }
    paintGrid(squareCount);
}