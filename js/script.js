const gridArea = 600;

const gridContainer = document.getElementById("grid-container");
gridContainer.style.width = `${gridArea}px`;

function createGrid(cellSize) {
  for (let i = 0; i < (Math.pow(cellSize, 2)); i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${(gridArea / cellSize) -2}px`;
    gridCell.style.height = `${(gridArea / cellSize) -2}px`;
    gridCell.classList.add("cell");

    gridContainer.appendChild(gridCell);
  }
}
createGrid(16);

const gridCell = document.querySelectorAll(".cell");
// Add event listeners for hover effect
gridCell.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
  });
});

const resetBtn = document.getElementById("clear-btn");
// Add event listeners for remove hover effect 
gridCell.forEach(item => {
  resetBtn.addEventListener("click", () => {
    item.classList.remove("hovered");
  });
});