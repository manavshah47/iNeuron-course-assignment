// 1. Are Higher Order functions and Call back functions the same ? If not,briefly explain about both functions.
// -> Higher order function and callback function are not same, they are different.
// Higher Order Function => Higher order function is a function that takes function as a argument or returns a function to its caller.
// Callback function => Callback function is a function that is passed to a function, expecting other function will call it.

// example. Higher order function (settimeout is a higher order function)
setTimeout(() => {
    console.log("Hi")
}, 1000)

// example. Callback function (here square is callback function)
function square(num){
    return num * num;
}

function printSquare(square){
    console.log("Square of 5 is: " , square(5))
}

printSquare(square);


// 2. Is filter a Higher Order function in Javascript ? If yes, why ?
// Yes, filter is a builtin higher order function in javascript because it takes a callback function as its argument.

// example
let arr = [2,3,4,5,6]

const isPrime = (num) => {
    for(let i = 2;i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

arr = arr.filter(isPrime)

console.log(arr)


// 3. Give an example of a Higher Order function and a call back function used in the same program.
// example

// here reduce is a higher order function
// sumOfSquaredError is a callback function

let errors = [2,1,-4,3]

const sumOfSquaredError = (prev, item, index) => {
    return prev += (item * item)
}

const totalError = function(){
    let err = errors.reduce(sumOfSquaredError, 0)
    
    return Math.sqrt(err/errors.length)
}

console.log(totalError())


// 4. Carefully check the example below:
const names= ['John', 'Tina','Kale','Max']

function useFunction(arr,fn){
    for(let i=0; i<arr.length; i++){
        fn(arr[i]);
    }
}

function argFn (name){
    console.log("Hello " + name );
}

useFunction(names,argFn);


// a) What will be the output of this program ?
// -> Hello John
//    Hello Tina
//    Hello Kale
//    Hello Max

// b) Which function is a Higher Order function here ?
// -> useFunction is a higher order function as it takes argFn function as a argument