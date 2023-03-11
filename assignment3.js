// 1. loops to print pattern

let m = 1;
for(let i = 0;i<4;i++){
    for(let j = 0;j<=i;j++){
        process.stdout.write(m + " ");
        m++;
    }
    console.log();
}

// 2. check armstrong 
let num = 371;
let tempNum = num;
let answer = 0;
while(tempNum != 0){
    let lastDigit = tempNum%10
    answer += Math.pow(lastDigit,3);
    tempNum = Math.floor(tempNum/10);
}

if(answer == num){
    console.log(num + " is armstrong number");
} else {
    console.log(num + " is not a armstrong number");
}

// 3. special number
let n = 145;
let tempN = n;
let ans = 0;

function getFactorial(a){
    let factor = 1;
    while(a >= 1){
        factor *= a;
        a--;
    }
    return factor;
}

while(tempN != 0){
    let lastDigit = tempN%10;
    ans += getFactorial(lastDigit);
    tempN = Math.floor(tempN/10)
}

if(ans == n){
    console.log(n + " is a special number");
}
else {
    console.log(n + " is not a special number");
}