// 1. 4 length string output
let str0 = "ice";
str0 = str0.length > 4 ? str0.substring(0,4)+"..." : str0;
console.log("1. ", str0);

// 2. remove white spaces
let str = "Hi boy";
str = str.split(" ").join("")
console.log("2. ", str);


// 3. reverse 2 words string
let str2 = "Hi boy";
str2 = str2.split(" ").reverse().join(" ")
console.log("3. ", str2);


// 4. replace a with x
let str3 = "apple";
str3 = str3.replace('a','x');
console.log("4. ", str3);


// 5. string to array conversion
let str4 = "simple string";
str4 = str4.split("")
console.log("5. ", str4);


// 6. occurrance of a specified text in string
let str5 = "Hello world";
console.log("6. ", str5.indexOf("ll"));


// 7. break a string to a newline in javascript
let str6 = "string with new line character \n here.";
console.log("7. ", str6);


// 8. check whether first character in string is lowercase
let str7 = "hello world";
let isLowerCase = str7.charAt(0) === str7.charAt(0).toLowerCase();
console.log("8. ", isLowerCase);


// 9. correct verdict to users
let str8 = "yeS";
let isYes = str8.toLowerCase() === "yes";
console.log("9. " , isYes);


// 10. achive following
// A. to uppercase
let s = "my simple string";
s = s.toUpperCase();
console.log(s);

// B. first character uppercase
s = s.charAt(0).toUpperCase() + s.substring(1,);
console.log(s);

// C. to lowercase
s = s.toLowerCase();
console.log(s);

// D. divide string into 2 half and swap them
s1 = s.substring(0,s.length/2)
s2 = s.substring(s.length/2 + 1,)
s = s2 + s1
console.log(s);

// E. repeating characters
let m = "manav";
let count = 0;
m = m.split("").sort();
for(let i = 0;i<m.length;m++){
    if(m[i] == m[i+1]){
        count++;
    }
}
console.log("repeating characters: " , count);

// F. reverse string
s = s.split("").reverse().join("");
console.log(s);

