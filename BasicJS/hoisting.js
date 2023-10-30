//HOISTING => n JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
// Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
//banane se pehele use krna is hoisting
//variables and functions are hoisted which means
//there declaration is moved on the top of code

//undefined vs not defined
//undefined-existance hai but value pata nahi hai
//not-defined - existance hi nahi hai

console.log(a); //getting value undefined ,its not an error , in other lang it will throw error that a is not defined
 var a=5;

 //so basically var a=5; is getting converted as var a; 
 //then a=5;
 //and then var a is moved to top of the code ,thats why we are getting undefined value not not defined.