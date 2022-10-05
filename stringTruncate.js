// Question
// Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

function stringTruncate(string){
    if(string.length<=4){
        return string;
    }
    string = string.slice(0,4)+"...";
    return string;
}

console.log(stringTruncate("Ice"));
console.log(stringTruncate("Icecream"));