// let boxes=document.getElementsByClassName("box")
let boxes=document.querySelector(".container").children
// console.log(boxes)

function getRandomColor(){
    let val1=Math.ceil(0 + Math.random()* 255);
    let val2=Math.ceil(0 + Math.random()* 255);
    let val3=Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    // console.log(e)
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})

// if we want to generate any random number between a and b: a+r(b-a)
// a=0 and b=255
//0 + Math.random()* 255
//Math.ceil(0 + Math.random()* 255) to convert it to an integer