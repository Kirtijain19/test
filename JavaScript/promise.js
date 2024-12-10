//solution to callback hell is promise. A promise is a promise of code execution. the code either executes or fails,in both cases subscriber will be notified.


//snippets banae h
// {
// 	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
// 	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
// 	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
// 	// same ids are connected.
// 	// Example:
// 	"Print to console": {
// 		"prefix": "clog",
// 		"body": [
// 			"console.log('$1');",
// 			"$2"
// 		],
// 		"description": "Log output to console"
// 	},
// 	"alert":{
// 		"prefix": "alt",
// 		"body": [
// 			"alert('$1');",
// 			"$2"
// 		],
// 	}
// }

console.log('this is promise');
alert('hello');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was not supporting you")
    }
    else {

        setTimeout(() => {
            console.log("yes I am done")
            resolve("Harry")
        }, 3000);
    }

})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was not supporting you 2")
    }
    else {

        setTimeout(() => {
            console.log("yes I am done 2 ")
            resolve("Harry 2")
        }, 1000);
    }

})
// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p3 = Promise.all([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })
//dono resolve hi hone chahiye tabhi show karega, waits for all promises to resolve and returns the array of their rseults, if any one fails, it becomes the error and all other results are ignored.

// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })
//isme chahe resolve ho ya reject vo show kar dega. waits for all promises to settle and returns their results as an array of objects with status and value/reason.

// let p3 = Promise.race([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })
//wait for first promise to settle and its result/error becomes the outcome

// let p3 = Promise.any([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })
//waits for first promise to fulfill and not rejected and result becomes the output. throws aggregate error if all promises are rejected

// let p3 = Promise.resolve([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })
//makes a resolved promise with a given value

let p3 = Promise.reject([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})
//makes a rejected promise with the given error

