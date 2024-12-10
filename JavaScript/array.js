//Arrays are variables which can hold more than one value they can be of different datatypes (unlike in C language)

let arr=[1,2,4,5,7]
console.log(arr, typeof arr);
arr[0]=5666;
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

//typeof array gives "object".
// array is mutable, string is immutable.
let a ="teddy";
a[0]="r";
console.log(a)


console.log(arr.toString())
console.log(arr.join(" and "))
// arr.join(" and ")
// console.log(arr)
// it won't work this way

console.log(arr.pop())
console.log(arr)
//arr.pop() will return popped value and updates the array

arr.push(100)
console.log(arr)
console.log(arr.push("Kirti"))
console.log(arr)
//arr.push() returns the updated length and updates the array

console.log(arr.shift())
console.log(arr)
//it removes the first value

console.log(arr.unshift("Jack"))
console.log(arr)

//shift pop ka bhai h aur unshift push ka bhai h

delete arr[2]
console.log(arr)
console.log(arr.length)
console.log(arr[2])
//memory is allocated but the value is not present there so length will include that deleted element but if we try to print that it will give output as undefined

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,9,8]
console.log(a1.concat(a2,a3))
console.log(a1)
// It returns a new array and does not change the existing arrays
console.log(a3.sort())
// It modifies the original array

let numbers=[1,2,3,4,5]
numbers.splice(1,3,23,34)
console.log(numbers)
// It will delete 3 numbers from position 1
//numbers.splice(position,number of elements to remove,elements to be added)

let num=[1,2,3,4]
console.log(num.slice(2))
console.log(num.slice(1,3))

