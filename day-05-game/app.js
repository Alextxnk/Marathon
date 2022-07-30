'use strict';


const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const boardEnd = document.querySelector('board-end');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
let time = 0;
let score = 0;


function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]; 
}


// () => {} - стрелочная call-back функция  
startBtn.addEventListener('click', (event) => {
   event.preventDefault();
   screens[0].classList.add('up');
});


// концепт называется делигирование событий (один слушатель на список) 
timeList.addEventListener('click', (event) => {
   if (event.target.classList.contains('time-btn')) {
      time = parseInt(event.target.getAttribute('data-time')); // приводим к числу 
      screens[1].classList.add('up');
      startGame();
   }
});


board.addEventListener('click', event => {
   if (event.target.classList.contains('circle')) {
      score++;
      event.target.remove();
      createRandomCircle();
   }
});


function startGame() {
   // задаем таймер с помощью функции setInterval, 
   // она будет через каждый промежуток времени, который мы зададим, выполнять какую-то другую функцию 
   setInterval(decreaseTime, 1000); // будем вызывать функцию decreaseTime, каждую секунду (1000 ms)
   createRandomCircle();
   setTime(time);
}


// уменьшает время в таймере на 1 сек 
function decreaseTime() {
   if (time === 0) {
      finishGame();
   } else {
      let current = --time;
      if (current < 10) {
         current = `0${current}`;
      }
      setTime(current);
   }
}


// helper function 
function setTime(value) {
   timeEl.innerHTML = `00:${value}`;
}


function finishGame() {
   timeEl.parentNode.classList.add('hide');
   board.innerHTML = `
   <div class="board-end">
      <h1>Счет:<span class="primary"> ${score}</span></h1>
      <a href="https://alextxnk.github.io/Marathon/day-05-game/" class="start" id="end">Сыграть еще</a>
   </div>`;
   /* https://alextxnk.github.io/Marathon/day-05-game/ */
   /* "/day-05-game/" */
   /* const endBtn = document.querySelector('#end');
   endBtn.addEventListener('click', (event) => {
      event.preventDefault();
      time = 0;
      score = 0;
      screens[1].classList.remove('up');
      // board.innerHTML = ``;
   }); */
}


function createRandomCircle() {
   const circle = document.createElement('div');
   const size = getRandomNumber(10, 60);
   // const {width, height} - называется деструктуризация 
   const {
      width,
      height
   } = board.getBoundingClientRect();
   // чтоб кружок помещался в board, мы вычитаем его размер 
   const x = getRandomNumber(0, width - size);
   const y = getRandomNumber(0, height - size);

   circle.classList.add('circle');
   circle.style.width = `${size}px`;
   circle.style.height = `${size}px`;
   circle.style.top = `${y}px`;
   circle.style.left = `${x}px`;
   circle.style.background = getRandomColor();

   board.append(circle);
}


function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

// добавить еще выбор времени и чтоб менялся цвет кружочков