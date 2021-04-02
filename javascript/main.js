const gridContainer = document.getElementById("grid-container");
const gridSizeNumber = document.getElementById("grid-size-number");
let actionType = "paintbrush";
let squareCount = 16;


// Add 16 x 16 cells to create grid
paintGrid(squareCount);
// Display current grid size
updateGridSize();

// Define 'paint grid' feature to create grid with given dimensions
function paintGrid(squareNum) {
    // Remove all cells in grid
    gridContainer.innerHTML = "";
    
    // Recreate cells in grid
    for (let i = 0; i < squareNum; i++) {
        /* Create a single role of cell elements
        Creating cells row by row allows cells to flex to equal width and height*/
        let gridRow = document.createElement("div");
        gridRow.className="grid-row";
        for (let j = 0; j < squareNum; j++) {
            // Create cell elements to add to row
            let gridCell = document.createElement("div");
            gridCell.className="grid-cell";
            gridCell.addEventListener('mouseover', handleMouseover);
            gridRow.appendChild(gridCell);
        }
        // Add single row of cell elements to grid
        gridContainer.appendChild(gridRow);
    }
}

// Define 'update grid size' feature
function updateGridSize() {
    gridSizeNumber.innerText = `${squareCount} x ${squareCount}`
}


// Add 'hover' effect to grid cells
function handleMouseover(e) {
    if (actionType == "paintbrush") {
        colorCell(e.target);
    } else if (actionType == "eraser") {
        colorCell(e.target, "base")
    }
}

// Define 'color cell' feature
function colorCell(cell, type = "random") {
    let color = "";
    let cellColor = cell.style.backgroundColor;
    
    switch (type) {
        case "random":
            color = `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, 0.3)`;
            break;
        case "base":
            color = "";
            break;
    }
        
    // Add 'darken cell' feature to increase opacity and tint on rehover (avoid recoloring cells)
    if (cellColor == "" || type == "base") {
        cell.style.backgroundColor = color;
    } else {
        // If not too opaque / black, increase opacity and add black tint
        let rgbaValues = cellColor.match(/(\b\w*\.?\w)/g);
        if (rgbaValues[1] > 10 || rgbaValues[2] > 10 || rgbaValues[3] > 10 || rgbaValues[4] < 0.8) {
            cell.style.backgroundColor = `rgba(${rgbaValues[1]*0.5}, ${rgbaValues[2]*0.5}, ${rgbaValues[3]*0.5}, ${parseFloat(rgbaValues[4]*1.4)})`
        }
    }
}
        
// Generate random rgb value
function randomRGB() {
    return Math.floor(Math.random()*256);
}


// Add 'reset' functionality through button "reset-btn"
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener('click', handleReset);
            
// Use querySelector to obtain a static NodeList so it can be iterate over later for removal of color
const gridCells = document.querySelectorAll(".grid-cell");

function handleReset() {
    removeColor(gridCells);
    resetGridSquareCount();
}

// Define 'remove color' feature for erasing all drawing on grid
function removeColor(cells) {
    cells.forEach(cell => {
        cell.style.backgroundColor = "pink";
    });
}

// Define 'reset grid square count' feature for repainting grid with new dimensions
function resetGridSquareCount() {
    if (squareCount >= 1 && squareCount <= 100) paintGrid(squareCount);
}



// FANCY STUFF

// Add 'change action type' functionality (paintbrush <=> eraser)
const actionTypeButton = document.getElementsByClassName("action-type-btn")[0];
actionTypeButton.addEventListener("click", handleChangeActionType);

function handleChangeActionType(e) {
    // Paintbrush <==> Eraser
    let currentActionType = e.target.dataset.type;
    let newActionType = "";

    (currentActionType == "paintbrush") ? newActionType = "eraser" : newActionType = "paintbrush";

    // switch action type which will eventually switch paint color
    actionType = newActionType;
    // change image
    e.target.setAttribute("src", `images/${newActionType}.svg`);
    // update element attributes (data-type)
    e.target.setAttribute("data-type", newActionType);
    // update element attributes (alt-text)
    e.target.setAttribute("alt-text", `Action Type selected is ${newActionType[0].toUpperCase() + newActionType.substring(1)}`)
}

// Add 'change grid size by drag' functionality
const gridSizeSliderButton = document.getElementById("grid-size-slider-btn");
const sliderLength = document.getElementById("grid-size-slider").offsetWidth;
const gridSizeSliderContainer = document.getElementById("grid-size-slider-container");

// Position grid size change button according to current square count (20 = half height of slider)
gridSizeSliderButton.setAttribute("style", `left: ${(squareCount / 100) * sliderLength - 20}px`);

let dragging = false;
let startX = 0;
let newX = 0;

gridSizeSliderButton.addEventListener("mousedown", handleDragStart);
gridSizeSliderButton.addEventListener("mousemove", handleDragging);
gridSizeSliderContainer.addEventListener("mouseup", handleDragEnd);

function handleDragStart(e) {
    if (!dragging) {
        dragging = true;
        startX = e.clientX;
    }
}

function handleDragging(e) {
    if (dragging) {
        let changeX = e.clientX - startX;
        newX = squareCount + Math.floor(changeX/sliderLength * 100);
        console.log(newX);
        if (newX < 1) {
            newX = 1;
        } else if (newX > 100) {
            newX = 100;
        }
        updateButtonPosition();
    }
}


function handleDragEnd(e) {
    if (dragging) {
        dragging = false;
        squareCount = newX;
        handleReset();
        updateGridSize();
    }
}

function updateButtonPosition() {
    gridSizeSliderButton.setAttribute("style", `left: ${(newX / 100) * sliderLength - 20}px`);
}