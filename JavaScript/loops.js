console.log("I am a tutorial on loops");
// for loop
// for in loop- loops through keys of an object
// for of loop- loops through values of an object
// while loop
// do while loop

//for loop
let a=1;
// for (let i = 0; i <100; i++) {
//     console.log(a+i);
    
// }


let obj={
    name:"Kirti",
    age:18,
    work:"student"
}
//forin loop
// for (const key in obj) {
   
//         const element = obj[key];
//         // console.log(key,element);
//         console.log(element);
//         // console.log(key);
        
// }

//forof loop
for (const c of "Kirti") {
    console.log(c);
    
}

let i=6;
// while (i<6) {
//     console.log(i);
//     i++; 
// }
do {
    console.log(i);
    i++;
    
} while (i<6);