// Question->
// Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”
function removeWhiteSpaces(str){
    let strArr = str.split(" ");
    let resultStr = "";
    for(let subStr of strArr){
        resultStr += subStr;
    }
    return resultStr;
}

console.log(removeWhiteSpaces("Hii Baby!"));
console.log(removeWhiteSpaces("Hii Baby! can you go with me?"));