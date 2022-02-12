const bissness = 400;
const doctor = 450;
const teacher = 800;

// condition with height number 

if(bissness > doctor && bissness > teacher){
    console.log('bissnesman is bigger');
}
else if(doctor > bissness && doctor > teacher){
    console.log('doctore is bigger');
}
else{
    console.log('teacher is bigger');
}


// function with bigger number 

function myHeighestNumber(first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    }
    else{
        return third;
    }
}

const lergestNumber = myHeighestNumber(200, 400, 612);
console.log('Lergest Number is', lergestNumber);


// Math.max

var max = Math.max(bissness, doctor, teacher);
console.log('Lergest Number', max);


// Math.min 

var min = Math.min(bissness, doctor, teacher);
console.log('Lowest Number', min);