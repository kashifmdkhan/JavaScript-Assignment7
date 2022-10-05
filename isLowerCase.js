// Question ->
// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.

function isLowerCase(str){
    if(str[0]>="a" && str[0]<="z")
        return true;
    return false; 
}

console.log(isLowerCase("hEllo"));
console.log(isLowerCase("Hello"));


// Question ->
// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?
// Answer -> 
// either we can convert user input string into uppercase or LowerCase using given method
// str.toLowerCase();
// str.toUpperCase();

