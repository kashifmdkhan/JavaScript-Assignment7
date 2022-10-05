// a) Convert the String into upper case.
// let str = "Hello World!";
// str = str.toUpperCase();
// console.log(str);

// b) Convert only the first character to uppercase.

// function toUpperCase1stChar(str){
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }
// let str1 = "helLo WorlD!";
// console.log(toUpperCase1stChar(str1));

// c) Convert the String into lower case.
// let str = "Hello World!";
// str = str.toLowerCase();
// console.log(str);


// d) Break the string into two halves and swap them.
// function halfStringSwap(str){
//     let str1 = str.substring(0,str.length/2);
//     let str2 = str.substring(str.length/2);
//     str = str2+str1;
//     return str;
// }

// console.log(halfStringSwap("Hey how are you"))

// e) Count the repeating characters.
// function countRepeatingChar(str){
//     let res = {};
//     for(let i=0;i<str.length;i++){
//         let key = str.charAt(i);
//         res[key] = isNaN(res[key]) ? 1: res[key]+1;
//     }
//     return res;
// }
// console.log(countRepeatingChar("banbabanab"));



// f) Reverse the string
function reverseString(str){
    let resultStr = "";
    for(let i=str.length-1;i>=0;i--){
        resultStr += str.charAt(i);
    }
    return resultStr;
}

console.log(reverseString("Hey! Buddy"));