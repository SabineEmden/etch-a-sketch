function createGrid(num) {
  const numCells = num * num;
  const size = 960 / num;
  const sketchPad = document.querySelector("#sketch-pad");
  for (let i = 0; i < numCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("style", `hight: ${size}px; width: ${size}px`);
    // cell.textContent = `${i + 1}`;
    sketchPad.appendChild(cell);
  }
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red} ${green} ${blue})`;
}

function activateGrid() {
  const grid = document.querySelectorAll(".cell");
  grid.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandomColor();
    });
  });
}

function removeGrid() {
  const sketchPad = document.querySelector("#sketch-pad");
  const grid = document.querySelectorAll(".cell");
  grid.forEach((cell) => {
    sketchPad.removeChild(cell);
  })
}

function promptUser() {
  num = Number(window.prompt("Number of squares per side of the grid:", "16"));
  if (num > 100) {
    window.alert("ERROR: The maximum is 100.");
  } else {
    removeGrid();
    createGrid(num);
    activateGrid();
  }  
}

createGrid(16);
activateGrid();

const btn = document.querySelector("#btn");
btn.addEventListener("click", promptUser);