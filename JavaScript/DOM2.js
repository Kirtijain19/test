// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"

document.getElementById("red").style.backgroundColor="red"

document.querySelector(".box").style.backgroundColor="green"
//it will select only first such element

console.log(document.querySelectorAll(".box"))
//it will return HTML colllection
// document.querySelectorAll(".box").style.backgroundColor="green"
//it won't work this way
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})
console.log(document.getElementsByTagName("div"))
e=document.getElementsByTagName("div")
e[4].matches("#red")
//it gives true or false
e[3].closest(".container") 
//it first checks on itself then on its ancestors one by one and return that one which matches the given property and if no such element exists then it returns null.
document.querySelector(".container").contains(e[2])
//true
document.querySelector(".container").contains(e[0])
//true
document.querySelector(".container").contains(document.querySelector("body"))
//false
document.querySelector("body").contains(document.querySelector(".container"))
//true
