console.log("This is strings tutorial");
let a="Kirti";

console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a.length);

let name="Kirti";
let friend="Kittu";
console.log("my name is "+ name + " and my friend name is " + friend)
console.log(`my name is ${name} and my friend name is ${friend}`);
// This is known as template literals. It use backticks instead of quotes to define a string. We can insert variables directly in template literal this is known as string interpolation.

let b="teDdy";
console.log(b.toUpperCase());
console.log(b)
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,4));
console.log(b.slice(1));
console.log(b.indexOf("dy"));
console.log(b.indexOf("zz"));
console.log(b.startsWith("te"));
console.log(b.startsWith("dy"));
console.log(b.endsWith("dy"));
console.log(b.replace("te","77"));
console.log(b);
let c="shivansh";
console.log(c.replace("sh","55"));
// if there are multiple occurence, only first will be replaced

console.log(b.concat(c));
console.log(b.concat(c,"nice"));
let d="  hello  ";
console.log(d.trim());

console.log(b);

// strings are immutable


//methods to reverse a string

//Method 1
//The split() method splits a String object into an array of string by separating the string into sub strings.
//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//The join() method joins all elements of an array into a string.

function reverseString(str)
{
    console.log( str.split("").reverse().join(""))
}
reverseString("hello")

//Method 2: using a decrementing for loop
function reverseString2(str)
{
    let NewString= ""
    for(let i=str.length-1; i>=0; i--)
    {
        NewString+=str[i]
    }
    console.log(NewString)
}
reverseString2("hello")

//Method 3: using recursion
function reverseString3(str)
{
    if (str=="")
    {
        return ""
    }
    else{
        return reverseString3(str.substr(1)) + str.charAt(0)
    }
}
let ans=reverseString3("hello")
console.log(ans)

//using ternary operator
function reverseString4(str)
{
    return (str=="") ? "" : reverseString3(str.substr(1)) + str.charAt(0)
}
let anss= reverseString4("hello")
console.log(anss)

//Method 4
function reverseString5(str)
{
    str= Array.from(str).reverse().toString().replaceAll(",","")
    return str
}
let ansss=reverseString5("hello")
console.log(ansss)