function lergestNumber(numbers){
    let lergest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > lergest){
            lergest = element;
        }
    }
    return lergest;
}

const ages = [12, 14, 25, 14, 36, 25, 45, 12, 23, 41, 26];
const oldest = lergestNumber(ages);
console.log('oldest', oldest);


// For Nagative Number


const tempareture = lergestNumber([-14, -22, -1, -2, -9, -33]);
console.log('heighest nagetie Number', tempareture);
