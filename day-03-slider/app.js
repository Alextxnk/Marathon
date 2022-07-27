'use strict';


const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length; // считаем количество слайдов 

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;


function changeSlide(direction) {
   if(direction === 'up') {
      activeSlideIndex++;
      if(activeSlideIndex === slidesCount) {
         activeSlideIndex = 0; // если вышли за рамки - обнуляем индекс 
      }
   } else if(direction === 'down') {
      activeSlideIndex--;
      if(activeSlideIndex < 0) {
         activeSlideIndex = slidesCount - 1;
      }
   }

   const height = container.clientHeight; // получаем высоту слайда 

   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}


document.addEventListener('keydown', event => {
   // console.log(event.key); // выводит название любой кнопки с клавиатуры 
   if(event.key === 'ArrowUp') {
      changeSlide('up');
   } else if(event.key === 'ArrowDown') {
      changeSlide('down');
   }
});


upBtn.addEventListener('click', () => {
   changeSlide('up');
});

downBtn.addEventListener('click', () => {
   changeSlide('down');
});

