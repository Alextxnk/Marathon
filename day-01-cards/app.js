'use strict';

const slides = document.querySelectorAll('.slide');

// теперь нужно пройти циклом по каждому из этих слайдов и добавить к нему определенного слушателя  
// два способа, как можно проходить по подобным массивам в JavaScript for...of и forEach

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