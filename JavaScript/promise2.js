// async function getData() {
//     //simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

//An async function runs in the background
//await is generally used inside an async function

//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully

async function getData() {
    //simulate getting data from a server
   let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data= await x.json()
    console.log(data)
    return 455
}

async function main() {

    console.log("loading modules")
    console.log("do something else")
    console.log("load data")

    let data = await getData()

    console.log(data)
    console.log("process data")
    console.log("task2")
}
main()
//yha promise pending rahega but aage ki js laod ho jaegi but if we want phle data load ho then process ho uske liye either we can use .then method or async/await method

// data.then((v) => {
//     console.log(data)
//     console.log("process data")
//     console.log("task2")
// })