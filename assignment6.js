// 1. parent class rectangle and child class square example
class rectangle{
    constructor(l,w){
        this.width = w;
        this.length = l;
    }

    area(){
        return this.length * this.width;
    }
}

class square extends rectangle{
    constructor(l){
        super(l,l);
    }
}

let s = new square(2);
console.log(s.area());


// 2. find nth largest from the array
let values = [12,21,37,14,75,43,68,70,18]

function nthLargest(n,arr){
    arr.sort();
    arr.reverse();
    return arr[n-1];
}

console.log(nthLargest(3,values));


// 3. insert dashes between each two even numbers
let data = "025468";

function computeDash(n){
    let str = n.toString().split("");
    let size = str.length;
    let ans = "";
    for(let i = 0;i<size;i++){
        let temp = parseInt(str[i]);
        let temp2 = parseInt(str[i+1]);
        if(temp%2 == 0 && temp2%2 == 0){
            ans += str[i] +"-";
        }
        else{
            ans += str[i];
        }
    }
    return ans;
}

console.log(computeDash(data));