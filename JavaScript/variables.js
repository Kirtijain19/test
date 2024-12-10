console.log("hello variables");
var a = 5;
var b = 6;
var c = "Harry";
console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c );
var _a = "Kirti";
// var 19a = "Kirti"; invalid
// variable name can start with alphabet underscore or dollar but not with digits
const a1 = 6;
// a1=a1+1;
// we cannot change value of a const variable
{
    var a = 20;
    console.log(a);
}
console.log(a);
// var is globally scoped but let and const are block scoped
let d = 9;
{
    let d = 19;
    console.log(d);
}
console.log(d);
// Primitive datatypes are a set of 7 basic datatypes in JS null, number, string, symbol, undefined, boolean, bigint
// typeof null gives object as output 
// object is a non primitve or user defined datatype
let x = "Kirti";
let y = 22;
let z = 3.55;
const p= true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Kirti",
    "roll no": 50,
    "is_cute": true

}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);