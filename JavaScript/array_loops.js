let a =[1,93,5,6,83]
for (let index = 0; index < a.length; index++) {
    
    const element = a[index];
    console.log(element) 
}
a.forEach(element => {
    console.log(element)
    
});
a.forEach((value,index,array) => {
    console.log(value,index,array)
    
});
// JavaScript Array forEach() Method

// Original array
const items = [12, 24, 36];
const copy = [];

items.forEach(function (item) {
    copy.push(item);
});

console.log(copy);
/////////////
// JavaScript Array forEach() Method

// Original array
const itemss = [1, 29, 47];
const squareOfItems = [];

items.forEach(function (item) {
    squareOfItems.push(item * item);
});

console.log(squareOfItems);

////////////
// Limitations of forEach() Method
// No Break or Continue: Unlike for loops, you cannot break the forEach() loop or use continue to skip to the next iteration. It will always iterate over all elements.
// No Return Value: The forEach() loop does not return a new array, it returns undefined.
// Asynchronous Issues: The forEach() loop does not handle asynchronous operations well. If you need to perform asynchronous operations, consider using for…of with async/await or Promise.all.

let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}
//In this loop, hasOwnProperty ensures that only properties that belong directly to obj are processed, not properties inherited from its prototype chain. This can be particularly useful to avoid unexpected behavior when iterating over objects.

//Use the for-in loop to iterate over non-array objects. Even though we can use a for-in loop for an array, it is generally not recommended. Instead, use a for-of loop for looping over an array.

const array = [1, 2, 3, 4, 5];

for (const value in array) {
  console.log(array[value]);
}
////////////////
const courses = {

    // Declaring a courses object
    firstCourse: "C++ STL",
    secondCourse: "DSA Self Paced",
    thirdCourse: "CS Core Subjects"
};

// Creating a new empty object with
// prototype set to courses object
const student1 = Object.create(courses);

// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
    console.log(courses);
}

// Iterating over all properties of
// student1 object
for (let prop in student1) {
    console.log(prop + " -> "
        + student1[prop]);
}




// Using for-of loop for array

for (const iterator of a) {
    console.log(iterator)
    
}

