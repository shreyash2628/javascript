//primitive values boolean var let char etc

//references values [],{},()

//primitive values have there own copy 

//references values shares the copy

//DEMO
let a=[1,2,3,4];
let b=a;

console.log(a);     //[1,2,3,4]
console.log(b);     //[1,2,3,4]
b.pop();
console.log(a);     //[1,2,3]
console.log(b);     //[1,2,3]

//bcoz a and b were sharing the reference