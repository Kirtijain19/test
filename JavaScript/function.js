// console.log("hello");
function nice(name) {
    console.log("hey "+ name+ " you are good");
    console.log("hey "+ name+ " you are nice");
    console.log("hey "+ name+ " you are cute");

    
}
nice("Kirti");
nice("Kittu");

function sum(a,b,c=3) {
    // console.log(a+b);
    return a+b+c;
    
}
result= sum(3,5);
console.log("the sum of these numbers is",  result);


// arrow function
const func1 = (x)=>{
    console.log("I am an arrow function",x);
}

func1(34);
func1(56);