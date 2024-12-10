let a = prompt("enter first number")
let b = prompt("enter second number")
//let sum=a+b
// console.log("the sum is",sum)
//this will give wrong answer as it will append two strings a and b instead of adding them.

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)
// console.log("the sum is",sum)

//NaN means not a number


function main() {
    try {
        console.log("the sum is", sum * x)
        return true
    } catch (error) {
        console.log("error aagya bhai")
        return false
    }
    finally {
        console.log("files are being closed and db connection is being closed")
    }
}
//try ho ya catch finally to chalega hi 
//to ise bina finally ke kyu nhi likha
//because agar hum ek function me h to return karne ke baad aage ka kuch nhi chalta lekin agar finally likha h to vo chal jaega