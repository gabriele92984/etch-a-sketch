const squareArea = 600;
let gridSize = 16; 

const grid = document.querySelector("#grid");
grid.style.width = `${squareArea}px`;
grid.style.width = `${squareArea}px`;

function createGrid() {

  for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${(squareArea / gridSize) - 2}px`;
    gridCell.style.height = `${(squareArea / gridSize) - 2}px`;
    gridCell.classList.add("cell");

    grid.appendChild(gridCell);
  }
}

createGrid();