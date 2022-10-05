// Question->
// Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”
function replaceWord(str)
{
    let strArr = str.split(" ");
    let strRes = "";
    for(let i=strArr.length-1;i>=0;i--)
    {
        strRes += strArr[i] + " ";
    }
    return strRes;
}

console.log(replaceWord("Hii Boy"));