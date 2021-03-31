const gridContainer = document.getElementById("grid-container");
// Add 16 x 16 cells to create grid
for (let i = 0; i < (16*16); i++) {
    // Create a single cell element
    let gridCell = document.createElement("div");
    gridCell.className="grid-cell";
    gridContainer.appendChild(gridCell);
}