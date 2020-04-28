let menu = document.querySelector('.menu');

//меняем местами
menu.insertBefore(menu.children[2], menu.children[1])

//добавляем пункт меню
let menuItem = document.createElement('li');
menuItem.className = ('menu-item');
menuItem.innerHTML = ('пятый');

menu.appendChild(menuItem);

//меняем фон
document.body.style.background = "url(./img/apple_true.jpg)" ;

//меняем заголовок
document.querySelector('#title').innerHTML = 'Мы продаем только подлинную технику Apple';

//удаляем рекламу
document.querySelector('.adv').remove();

//отношение к технике apple 
document.querySelector('#prompt').innerHTML = prompt
