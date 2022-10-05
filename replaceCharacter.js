// Question->
// Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”
function replaceCharacter(str){
    let charArr = [...str];
    let strRes = '';
    for(let i in charArr){
        if(charArr[i]=='a'){
            charArr[i] = 'x';
        }
        strRes += charArr[i];
    }
    return strRes;
}

console.log(replaceCharacter("apple is mango"));