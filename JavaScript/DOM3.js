// document.querySelector(".box")
// document.querySelector(".box").innerHTML
// document.querySelector(".box").innerHTML="hello world"     //change bhi kar sakte h aise
// document.querySelector(".box").innerText
// document.querySelector(".box").hasAttribute("style")
// document.querySelector(".box").attributes
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").removeAttribute("style")
// document.querySelector(".box").setAttribute("style","display:inline")
// document.querySelector(".container").innerText
// document.querySelector(".container").innerHTML
// document.querySelector(".container").outerHTML
// document.querySelector(".container").tagName //keval tag ke liye
// document.querySelector(".container").nodeName //kisi bhi node ke liye jse text node ya comment node etc
// document.querySelector(".container").textContent 
// document.querySelector(".container").hidden   //false 
// document.querySelector(".container").hidden=true  //true 

// document.designMode="on"
// //isse kisi bhi website ko edit kar sakte h

// document.querySelector(".box").dataset
//data-created by:"kirti" aisa kuch ho vo display karne ke liye


//insertion methods
let div=document.createElement("div")
div.innerHTML="I have been inserted <b>by Kirti</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)
// append prepend before after replaceWith

//insert adjacent HTML/text/element
let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b> I am on heaven nine</b>")
//beforebegin afterbegin beforeend afterend

//remove
// document.querySelector(".box").remove()

document.querySelector(".container").classList 
//usme jo classes lagi hui h vo sab
document.querySelector(".container").className
document.querySelector(".container").classList.add("blue")
document.querySelector(".container").classList 
document.querySelector(".container").classList.remove("blue")
document.querySelector(".container").classList 
document.querySelector(".container").classList.toggle("red") 
//adds the class if it does not exist else removes it
document.querySelector(".container").classList.contains("blue")