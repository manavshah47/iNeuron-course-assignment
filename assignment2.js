// 1. Check whether triangle is equilateral, isosceles or scalene
let side1 = 20;
let side2 = 20;
let side3 = 20;

if(side1 == side2 == side3){
    console.log("Triangle is equilateral");
} else if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log("Triangle is isosceles");
}
else{
    console.log("Triangle is a scalene");
}


// 2. Switch case statement to find grade of a student
let marks =85;

switch (true){
    case (marks > 90 && marks < 100):
        console.log("S grade");
        break;
    case (marks > 80 && marks < 90):
        console.log("A grade");
        break;
    case (marks > 70 && marks < 80):
        console.log("B grade");
        break;
    case (marks > 60 && marks < 70):
        console.log("C grade");
        break;
    case (marks > 50 && marks < 60):
        console.log("D grade");
        break;
    case (marks > 40 && marks < 50):
        console.log("E grade");
        break;
    case (marks > 0 && marks < 40):
        console.log("Student has failed");
        break;
    default:
        console.log("Invalid marks");
}
if(marks > 90 && marks < 100){
    console.log("yes");
}


// 3. Sum of multiple of 3 and 5 under 1000
let num = 1;
let result = 0;
while(num < 1000){
    if(num%3 == 0 || num%5 == 0){
        result += num;
    }
    num++;
}

console.log(result);


// 4. Find factorial of all prime numbers in given range
function isPrime(num){
    let i = num -1;
    while(i > 1){
        if(num%i == 0){
            return false;
        }
        i--;
    }
    return true;
}

function factorial(num){
    let ans = 1;
    if(num < 0) return 0;
    if(num == 0) return 1;
    while(num != 1){
        ans *= num;
        num--;
    }
    return ans;
}

let front = 1;
let back = 10;

let answer = 0;
for(let i = front;i<=back;i++){
    if(isPrime(i)){
        answer += factorial(i);
    }
}

console.log(answer);