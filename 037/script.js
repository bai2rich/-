const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[2].classList.remove('some'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

// last btn have sam event with olds
// wrapper.addEventListener('click', (event) => {
//     // console.dir(event.target);
//     if (event.target && event.target.tagName == 'BUTTON') {
//         // if (event.target && event.target.classList.contains('blue')) {
//         console.log('hello');
//     }
// });

// bez dellegirovania, last btn ni chego ni delaet
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log('hello w');
//     });
// });

//delligirovanie s selictorami
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.matches('button.red')) {
        // if (event.target && event.target.classList.contains('blue')) {
        console.log('hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
