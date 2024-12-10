//MAP

let array=[1,13,5,7,11];
// let newarr=[];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarr.push(element**2)
// }

// let newarr=array.map((e, index, array)=>{
//     return e**2
// })
let newarr=array.map((e)=>{
    return e**2
})
console.log(newarr)

//FILTER

// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//         return false
// }
// console.log(array.filter(greaterThanSeven))

console.log(array.filter((e)=>{
    if(e>7){
        return true
    }
    return false
}))

//REDUCE

let arr2=[1,2,3,4,5,6];
// const red=(a,b)=>{
//     return a*b
// }
// console.log(arr2.reduce(red))
console.log(arr2.reduce((a,b)=>{
    return a*b
}))


console.log(Array.from("teddy"))