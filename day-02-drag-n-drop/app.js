'use strict';


const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


// добавляем обработчик событий 
// первым параметром передаем события 
// вторым параметром передаем функции
item.addEventListener('dragstart', dragstart); // начало перетаскивания элемента 
item.addEventListener('dragend', dragend); // конец перетаскивания элемента 

for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover', dragover); 
   // dragover - вызывается, когда элемент, который мы перетаскиваем находится над placeholder-ом, 
   // куда мы можем поместить элемент
   placeholder.addEventListener('dragenter', dragenter);
   // dragenter - когда мы заходим на территорию конкретного placeholder-а
   placeholder.addEventListener('dragleave', dragleave);
   // dragleave - когда мы перетащили, но вышли от туда, 
   // вышли за территорию placeholder-а
   placeholder.addEventListener('drop', daragdrop);
   // drop - когда мы отпустили элемент 
}

function dragstart(event) {
   // console.log('drag start', event.target);
   // event.target - сам элемент, к нему мы можем добавлять CSS стили, например, когда перетаскиваем элемент 
   event.target.classList.add('hold'); // добавляем класс, когда начинаем перетаскивать элемент 
   setTimeout(() => event.target.classList.add('hide'), 0);
   // event.target.classList.add('hide'); 
}

function dragend(event) {
   // console.log('drag end', event.target);
   event.target.classList.remove('hold', 'hide'); // удаляем классы 

   // либо второй вариант 
   // event.target.className = 'item'; // перетирает все остальные классы и записывает только класс item

   // className работает со строчкой, а classList - это объект
}

function dragover(event) {
   event.preventDefault();
   // console.log('drag over');
}

function dragenter(event) {
   event.target.classList.add('hovered');
   // console.log('drag enter');
}

function dragleave(event) {
   event.target.classList.remove('hovered');
   // console.log('drag leave');
}

function daragdrop(event) {
   event.target.classList.remove('hovered');
   event.target.append(item);
   // console.log('darag drop');
}