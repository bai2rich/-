"use strict";

//lesson 20

// function learnJS(lang, callback) {
//     console.log(`i learn: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('I studied it!');
// });

// function learnJS(lang, callback) {
//     console.log(`i learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I studied it!');
// }

// learnJS('JS', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} have ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`properties ${key} have value ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

//lesson 21

// const arrow =[1, 2, 3, 6, 8];

// arrow.forEach(function(index, i, arr) {
//     console.log(`${i}: ${index} inside massiv ${arr}`);
// });


// // arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(compareNam);
// console.log(products.join("; "));

// function compareNam(a, b) {
//     return a -b;
// }

//lesson 22

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // link to obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbbers = copy(numbers);

// newNumbbers.a = 10;
// newNumbbers.c.x = 10;

// console.log(newNumbbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'addd';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimoe', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internett = [...video, ...blogs, 'vk', 'fb'];

// console.log(internett);


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 3, 7];

// log(...num);


// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newOnj = {...q};
// console.log(newOnj);


//lesson 23 oop

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const solder = {
//     healh: 400,
//     armor: 99,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(solder);

// // const jonh = {
// //     healh: 100
// // };

// // jonh.__proto__ = solder; //old version now dont use

// // Object.setPrototypeOf(jonh, solder); //new, now in use

// console.log(jonh.armor);
// jonh.sayHello();


// lesson 26

//to String
//1
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// //2
// console.log(typeof((5 + '')));

// const num = 5;

// console.log("https://vk.com/catalog" + num);

// const fonSize = 26 + 'px';

// //to Number
// //1
// console.log(typeof(Number(null)));
// console.log(typeof(Number('4')));
// console.log(typeof(Number('hi')));

// //2
// console.log(typeof(+'5'));

// //3
// console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// //to boolean
// // 0, '', null, undefined, NaN;
// //1 используют
// let switcher = null;

//     if (switcher) {
//         console.log('Working...');
//     }

//     switcher = 1;

//     if (switcher) {
//         console.log('Working...');
//     }

// //2 не исп
// console.log(typeof(Boolean('4')));

// //3 редко исп
// console.log(typeof(!!"4444"));

//lesson 28