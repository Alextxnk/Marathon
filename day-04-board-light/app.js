'use strict';


const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#df0673', '#dcd616', '#5c46ec', '#8a0767', '#f16317'];
const squaresNumber = 600; 

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]; 
}

function setColor(event) {
   const element = event.target;
   const color = getRandomColor();
   element.style.backgroundColor = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
   const element = event.target;
   element.style.backgroundColor = '#1d1d1d';
   element.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < squaresNumber; i++) {
   const square = document.createElement('div'); // динамически создаются теги
   square.classList.add('square'); // добавление класса 

   // mouseover - вызывается, когда наводим мышь на определенный квадрат 
   square.addEventListener('mouseover', setColor);

   square.addEventListener('mouseleave', removeColor);

   board.append(square); // добавление квадратов в board 
}
