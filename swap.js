let first = 2;
let second = 5;
console.log(first, second);

// swap templet

let temp = first;
first = second;
second = temp;
console.log(first, second);

// Destructing

[first, second] = [second, first];
console.log(first, second);
