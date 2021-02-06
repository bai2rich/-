// const timerId = setTimeout(function () {
//     console.log('hello');
// }, 2000);

// const timeId1 = setTimeout(
//     function (text) {
//         console.log(text);
//     },
//     2000,
//     'hello1'
// );

// const timerId2 = setTimeout(logger, 2000);
// function logger() {
//     console.log('hello2');
// }

// setTimeout(logger, 2000);
// function logger() {
//     console.log('hello2');
// }

// const timerId3 = setTimeout(logger, 2000);
// clearInterval(timerId3);
// function logger() {
//     console.log('hello3');
// }

//
// let btn = document.querySelector('.btn'),
//     timerId4,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timerId4 = setTimeout(logger, 2000);
//     timerId4 = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId4);
//     }
//     console.log('hello4');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello5');
//     id = setTimeout(log, 500);
// }, 500);

//
let btn = document.querySelector('.btn'),
    timerId4,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
