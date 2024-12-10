async function sleep()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// let a= await sleep()
// let b= await sleep()
//it will give error

//IIFE: immedaitely invoked function expression

// (async function main(){
//     let a= await sleep()
//     console.log(a)
//     let b= await sleep()
//     console.log(b)
// })()

//concept of destructuring
(async function main(){
    let [x, y, ...rest]= [1,5,7,8,9,10]
    console.log(x, y, rest)

    let obj={
        a:1,
        b:2,
        c:3
    }
    let {a,b} = obj
    console.log(a, b)
})()


//concept of spread synatx

function sum(a,b,c)
{
    return a+b+c
}

(async function main(){
   let arr=[1,4,6]
   //console.log(arr[0] + arr[1] + arr[2])
   //console.log(sum(arr[0] , arr[1] , arr[2]))
   console.log(sum(...arr))

//    const arr= [1,7,11]
//    const obj= {...arr}   //{0:1, 1:7, 2:11}
})()


//Hoisting: it refers to the process whereby the interpreter appaers to move the declarations to the top of the code before execution. variables can thus be referenced before they are declared in javascript. it is doneby using var only and not with let or const.