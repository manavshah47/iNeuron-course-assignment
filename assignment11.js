const inputArray1 = [1,2,3,4,5,6,7,8]
const inputArray2 = [2,3,7,7,2]

// Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places

const gcd = (a,b) => {
    if(a == 0){
        return b;
    }
    return gcd(b%a,a);
}

console.log(" *** 1 *** ");
const arrayFunc = function (data){
    console.log("input array: ", data);
    const oddArraySum = data.reduce((prev, item, index) => (index+1)%2 != 0 ? prev + item : prev, 0)
    const evenArraySum = data.reduce((prev, item, index) => (index+1)%2 == 0 ? prev + item : prev, 0)

    const oddElementCount = Math.ceil(data.length / 2);
    const evenElementCount = Math.floor(data.length / 2);

    const difference = oddArraySum - evenArraySum

    const averageOfAllElements = data.reduce((prev, val) => prev + val) / data.length

    let gcdAnswer = 0;
    for(let i = 0;i<data.length;i++){
        gcdAnswer = gcd(data[i], gcdAnswer)
    }
    
    console.log("odd place element sum: ", oddArraySum);
    console.log("even place element sum: ", evenArraySum);
    console.log("odd place element count: ", oddElementCount);
    console.log("even place element count: ", evenElementCount);
    console.log("Odd and even place element sum difference: ", difference)
    console.log("Average of all elements: ", averageOfAllElements)
    console.log("gcd of all elements: ", gcdAnswer)
}

arrayFunc(inputArray1);


console.log("\n *** 2 *** ");
// 2. Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
const arr1 = [2,3, 4];
const arr2 = [11,2,3];
console.log("Input array 1: ", arr1)
console.log("Input array 2: ", arr2)
const checkFourExists = (arr1, arr2) => {
    const arr1Check = arr1.indexOf(4);
    const arr2Check = arr2.indexOf(4);

    if(arr1Check == -1 && arr2Check == -1){
        console.log("Could not find 4 in any array")
    } else if (arr1Check >= 0 && arr2Check >= 0){
        console.log("4 in both arrays")
    } else if(arr1Check >= 0){
        console.log("4 in array 1")
    } else {
        console.log("4 in array 2")
    }

}

checkFourExists(arr1, arr2);

// 3. custom flat function to flatten array
const nestedArr = [1,2,3, [3,2,1], [[2,3]]]
console.log("\n *** 3 *** ");
console.log("input array: ", nestedArr)

const customFlat = (arr) => {
    let result = [];

    arr.forEach(element => {
        if(Array.isArray(element)){
            result.push(...customFlat(element))
        } else {
            result.push(element)
        }
    });

    return result;
}

console.log("flattend Array: ", customFlat(nestedArr))


// 4. Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
console.log("\n *** 4 *** ");
let arr4 = [1,2,3,4,5,3,1,2,3,3];
console.log("input array: ", arr4)
arr4 = arr4.sort();

const duplicates = [];

let i = 0;
while(i < arr4.length - 1){
    if(arr4[i] == arr4[i+1]){
        duplicates.push(arr4[i])
        arr4.splice(i+1, 1);
    }
    else {
        i++;
    }
}

console.log("Duplicates: ", duplicates)
console.log("Original array without Duplicates: ", arr4)



console.log("\n *** 5 *** ");
// 5. Debug Code and correct it.
// correct working code
function thirdLargest(arr, arr_size) {
    /* There should be
    at least three elements */
    if (arr_size < 3) {
        console.log(" Invalid Input "); return;
    }

    let first = arr[0];
    for (let i = 1; i < arr_size; i++){

        if (arr[i] > first){
            first = arr[i]
        }
    }
    
    let second = Number.MIN_VALUE; 
    for (let i = 0;i < arr_size; i++){
        if (arr[i] < first && arr[i] > second){
            second = arr[i]
        }
    }
    
    let third = Number.MIN_VALUE; 
    for (let i = 0; i < arr_size; i++){
        if (arr[i] > third && arr[i] < second){
            third = arr[i]
        }
    }
    console.log("The third Largest " + "element is ", third);
}

let arr = [12, 13, 1, 10, 34, 16]; 
let n = arr.length;

thirdLargest(arr, n);