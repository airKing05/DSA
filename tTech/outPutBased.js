//L#04 floatingPoint.js

console.log(400.4 === 200.2 * 2);
console.log(900.9 === 300.3 * 3);  // JS FOLLOW IEEE for numaric type, decimal as flaoting points number
console.log(900.9 === 300.3 * 10 * 3 /10);

// L#05
console.log( typeof {}); 
console.log(typeof []);
console.log( Array.isArray([]));
console.log([] instanceof Array);
console.log({} instanceof Object);

// L#07

let obj = [
    {
        name: 'anil',
        work: 'software'
    },
    {
        name: 'anil',
        work: 'web'
    }
];

console.log("index of ",obj.indexOf({
    name: 'anil',
    work: 'web'
}));
// -1 , in js objects are pass by referance 

// two objects will never ever be equal in js

let a = {first: 'a'};
let b =a;
b.first = 'b';
let c = { };

console.log("a==b", a==b);  // true referranc is same
console.log("a===b", a === b); // true

console.log("a==c", a == c);  // false referance is different


