// Write a program to calculate factorial of a number using reduce and using for loops

// let a=prompt("enter the number to calculate its factorial");
// let i=1;
// let fact=1;
// for(i=1;i<=a;i++){
//     fact=fact*i
// }
// alert(fact);


//method 2

function factorial(number){
    let arr= Array.from (Array(number+1).keys())
    // console.log(arr.slice(1))
     let c= arr.slice(1).reduce((a,b)=>{
        return a*b
    })
    return c
}

ans=factorial(6)
console.log(ans)
console.log(factorial(5))



//method 3
function facFor(number){
    let fact=1
    for (let i = 1; i <= number; i++) {
        fact=fact*i
        
    }
    return fact
}
console.log(facFor(7))
console.log(facFor(6))