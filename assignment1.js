// 1. Create a function to find wheather a year is leap year or not;
function isLeapYear(year){
    if(year % 4 == 0){ // if year is divisible by four and not divisible by 100 then leap year
        if(year % 100 == 0){ // if year is divisible by four, 100 & 400 then leap year
            if(year % 400 == 0){
                return true;
            }
            return false; // if year is divisible by 4 & 100 and not by 400 then not leap year
        }
        return true;
    }
    return false;
}

let year = 100;
console.log(isLeapYear(year));


// 2. Create a function to convert fahrenheit to celcius and celcius to fahrenheit
function celciusToFahrenheit(num){
    return (((9/5) * num) + 32);
}

function fahrenheitToCelcius(num){
    return ((num-32) * 5)/9;
}

let temperature = 100;
console.log(fahrenheitToCelcius(temperature));
console.log(celciusToFahrenheit(temperature));


// 3. Create a function to find factorial of a number.
function factorial(num){
    let factor = 1;
    if(num < 0){
        return -1;
    }
    while(num != 1){
        factor *= num;
        num--;
    }
    return factor;
}

let num = 7;
const factor = factorial(num);
if(factor == -1){
    console.log("Enter number >= 0 to find factorial");
}
else{
    console.log(factorial(num));
}

