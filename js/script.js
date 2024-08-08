const gridArea = 600;
let cellSize = 16; 

const grid = document.querySelector("#grid");
grid.style.width = `${gridArea}px`;
grid.style.height = `${gridArea}px`;

function createGrid() {
  for (let i = 0; i < (Math.pow(cellSize, 2)); i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${(gridArea / cellSize) -2}px`;
    gridCell.style.height = `${(gridArea / cellSize) -2}px`;
    gridCell.classList.add("cell");

    grid.appendChild(gridCell);
  }
}

createGrid();


const gridCell = document.querySelectorAll(".cell");
// Add event listeners for hover effect
gridCell.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });
});

const resetBtn = document.getElementById("resetButton");
// Add event listeners for remove hover effect 
gridCell.forEach(item => {
  resetBtn.addEventListener('click', () => {
    item.classList.remove('hovered');
  });
});