let button= document.getElementById("btn")
// button.addEventListener("click",()=>{
//     alert("I was clicked")
//     document.querySelector(".box").innerHTML="<b> yayy you were clicked</b>"
// })
button.addEventListener("dblclick",()=>{
    alert("I was double clicked")
    
})
button.addEventListener("contextmenu",()=>{
    alert("don't hack us by right click please")
})
document.addEventListener("keydown",(e)=>{
   // console.log(e)
    console.log(e.key, e.keyCode)
})
// button.removeEventListener("dblclick",()=>{
//     alert("I was double clicked")
// })

//there are many mouse and keyboard events which can be searched as browser events mdn 