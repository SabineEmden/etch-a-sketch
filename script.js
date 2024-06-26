function createGrid(num) {
  const numCells = num * num;
  const size = 960 / num;
  const sketchPad = document.querySelector("#sketch-pad");
  for (let i = 0; i < numCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("style", `hight: ${size}px; width: ${size}px`);
    sketchPad.appendChild(cell);
  }
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red} ${green} ${blue})`;
}

function reduceOpacity(event) {
  let opacityValue = event.target.style.opacity;
  if (opacityValue === "") {
    event.target.style.opacity = "1";
  } else if (opacityValue > 0) {
    opacityValue = Number(opacityValue) - 0.1;
    event.target.style.opacity = opacityValue.toString();
  }
}

function activateGrid() {
  const grid = document.querySelectorAll(".cell");
  const random = document.querySelector("#random");
  const darkening = document.querySelector("#darkening");
  grid.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      if (random.checked == true) {
        event.target.style.backgroundColor = getRandomColor();
      } else {
        event.target.style.backgroundColor = "orange";
      }
      if (darkening.checked ==true) reduceOpacity(event);
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