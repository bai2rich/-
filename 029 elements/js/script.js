'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), //tak kak rodotelia vibrali, chrez nego dostup k vnutrnnim elementam
      oneHeart = document.querySelector('.heart');
      
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';


btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('here was i');

div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);
// wrapper.appendChild(div); //old method

// hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[1].remove();
// wrapper.removeChild(hearts[0]); // old version from perrent

// hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]); //old version from perent

div.innerHTML = '<h1>Hello World</h1>'; // text or HTML Teg
// div.textContent = 'Hello'; //only text

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');