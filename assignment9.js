// 1. a) is the InnerFunction() a closure?
// yes, InnerFunction is a closuse, because closure is a function that references variables in outer scope from its inner scope

// b) what is output of this program
// alert will be desplayed 100 in it.



// 2. what is difference between closure and a scope
// closure: closure is a function that references variables in outer scope from its inner scope
// example.
function OuterFunction(){
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

// scope: scope refers to the current context of code, which determines the accessibility of variables to JavaScript.
// there are 3 type of scope in javascript 
// 1. global scope --> accessible in whole file
// 2. function scope --> accessible inside function only
// 3. block scope --> {} (let and const provides it)



// 3. what is lexical scope and how is related to closure?
// lexical scope means a scope refers to current context of code.
// it means accessing parent scope data from child scope, it is what we are performing while closures



// 4. output of following code?
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
    console.log(i); // What is logged?
    }, 1000);
}
// 3 3 3