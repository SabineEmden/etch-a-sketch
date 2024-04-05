function createGrid(num) {
  const numCells = num * num;
  const size = 960 / num;
  const sketchPad = document.querySelector("#sketch-pad");
  for (let i = 0; i < numCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("style", `hight: ${size}px; width: ${size}px`);
    cell.textContent = `${i + 1}`;
    sketchPad.appendChild(cell);
  }
}

createGrid(16);

const grid = document.querySelectorAll(".cell");

grid.forEach((cell) => {
  cell.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "orange";
  })
});