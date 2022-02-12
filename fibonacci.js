/* const fiboSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]; */

const fibo = [0, 1];
for(let i = 2; i <= 20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo);

// fibonacci Series with function 

function fibonacciSeries(num) {
    if(typeof num != 'number'){
        return 'Plese input a valid number';
    }
    else if(num < 2){
        return 'plese input a positive number geter than one';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(30);
console.log(fiboSeries);