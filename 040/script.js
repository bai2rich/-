'use strict';

// const now = new Date();
// console.log(now);

// const now = new Date('2021-02-05');
// console.log(now);

// const now = new Date(2021, 2, 5, 20);
// console.log(now);

//in ms from 1970-01-01T00:00:00.000Z
// const now = new Date(0);
// console.log(now);

//
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth()); //jun-0, dec-11
// console.log(now.getDate());
// console.log(now.getDay()); //sun-0, sat-6
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); //in ms from 1970

// console.log(now.setHours(4));
// console.log(now);
//

const now = new Date('2021-02-05');
// new Date.parse('2021-02-05');

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let som = i ** 3;
}

let end = new Date();

alert(`cicle worked in ${end - start} ms`);
