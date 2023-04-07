// 1. Can we put duplicate values in the set object ?
// No, we cannot put duplicate values in set object as value in the set may only occur once; it is unique in the set's collection.

// 2. create set
let simpleSet = new Set([1,2,5]);
console.log(simpleSet);

// insert data to the set
simpleSet.add(4);
console.log(simpleSet);

// delete data from the set
simpleSet.delete(2);
console.log(simpleSet);

// 3. create set of 4 members between 0-10 and check if 8 exists in it or not
let set2 = new Set();

while(set2.size != 4){
    let val1 = Math.floor(Math.random() * 10);
    set2.add(val1)
}

console.log("set2: ", set2);

let isEightInsideSet = set2.has(8)
console.log(isEightInsideSet);

