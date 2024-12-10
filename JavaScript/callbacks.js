//asynchronous nature of JS
//there are certain elements in JS whose execution is delayed and it does not follow the sequence
console.log("Harry is a hacker")
console.log("Rohan is a hacker")

setTimeout(() => {
    console.log("I am inside settimeout")
    
}, 0);

console.log("the end")

//callback function
//callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.

const fn=()=>{
    console.log("nothing")
}
const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}
const loadScript=(src, callback)=>{
    let sc=document.createElement("script")
    sc.src=src
    sc.onload=callback("Harry",fn)
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
//anfn likhke enter karenge to arrow function directly ban jaega

//when we have callback inside callbacks, the code gets difficult to manage, it is called "callback hell" or "pyramid of doom"
//solution to callback hell is promise. A promise is a promise of code execution. the code either executes or fails,in both cases subscriber will be notified.