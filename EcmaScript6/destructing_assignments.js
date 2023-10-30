//Destructing Assignments
let arr=['javascript','java','cpp','python'];

//instead of doing this
// let a=arr[0];
// let b=arr[1];
// let c=arr[2];
// let d=arr[3];

//do this (es6)
let [p,q,r,s]=arr;

//will get only first two values
let[x,y]=arr;

//to add only first and last element
let [a,,,d]=arr;

console.log(arr.length);
console.log(a,d);
