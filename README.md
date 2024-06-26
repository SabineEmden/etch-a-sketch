# Project: Etch-a-Sketch

This project for JavaScript Basics in the Foundations Course of The Odin Project uses DOM manipulation and events.

Assignment: [Project: Etch-a-Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

The page shows a sketch pad with an invisible grid of square cells. The cells change color from white to orange when the mouse is moved over them, leaving a (pixelated) trail through the grid.

The page loads with a 16x16 grid. When the user clicks a button above the grid, they are asked for the number of squares per side for a new grid. After the number is entered, the existing grid is removed and a new grid is generated in the same total space as before.

## Extra credit
1. If the checkbox "random color" is checked, rather than the cells changing to the same color throughout the grid, the color is randomized with each interaction.
2. If the checkbox "progressive darkening" is checked, a cell changes color from white to orange or to a random color on the first interaction with the mouse. Over the next ten interactions with the mouse, the cell progressively darkens until it is black.

## Skills used:
 - JavaScript basics: DOM manipulation and events
 - JavaScript basics: variables, operators, data types, conditionals, function basics, loops, debugging with Chrome DevTools
 - HTML and CSS basics
 - Version control with git
 - Sharing code on GitHub
 - Deployment on GitHub Pages
 - Command line basics for file management and version control

## Acknowledgement
 This line of code in Andrea Bertos' [Etch-A-Sketch solution](https://github.com/Tussis88/Etch-A-Sketch) was the essential clue I needed to implement a first version of the progressive darkening effect:
 `let opacityValue = parseFloat(pixel.target.style.opacity || 0);`

 After I found Andrea's code, it took me two more days to come up with me own solution for the progressive darkening effect.