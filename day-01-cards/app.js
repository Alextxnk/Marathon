'use strict';


function slidesPlugin(activeSlide = 2) {
   const slides = document.querySelectorAll('.slide');

   // теперь нужно пройти циклом по каждому из этих слайдов и добавить к нему определенного слушателя  
   // два способа, как можно проходить по подобным массивам в JavaScript for...of и forEach

   slides[activeSlide].classList.add('active');

   for (const slide of slides) {
      slide.addEventListener('click', () => {
         clearActiveClasses();

         slide.classList.add('active');
      }); // добавляем слушателя событий 
   }

   function clearActiveClasses() {
      slides.forEach((slide) => {
         slide.classList.remove('active');
      });
   }
}

slidesPlugin(3); 