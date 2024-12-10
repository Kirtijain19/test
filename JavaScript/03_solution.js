// write  a function to produce mirror image of a string 

// function reverseString(str)
// {
//     str= str.split("").reverse().join("")
//     return str
// }
// let ans=reverseString("hello")
// console.log(ans)
function reverseString(str)
{
    str= Array.from(str).reverse().toString().replaceAll(",","")
    return str
}
let ans=reverseString("hello")
console.log(ans)