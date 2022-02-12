// sum of all numbers in an array

const numbers = [12, 14, 21, 32, 52, 63, 41, 58, 69, 47, 12];

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
}
console.log('First Array Sum', sum);


// sum of all numbers in a function

function sumOfArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const arraySum = sumOfArray([12, 14, 21, 32, 52, 63, 41, 58, 69, 47, 12]);
console.log('My array Sum', arraySum);