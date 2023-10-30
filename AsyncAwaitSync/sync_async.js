//SYNCHRONOUS -ek ke bad ek  kam krna line me



//Asynchronoues - sb ek sath start hua jo pehela complete hua vo pehela return hoga

console.log("timeout ke pehele");

setTimeout(function()
{
    console.log("time out k andar");
},3000);


console.log("timeout ke bahar");


//call stack where all synchronous code  is kept ,
//side stack where all asynchronous code is kept to execute ,
//The event loop continuously checks the call stack and the task queue. When the call stack is empty, the event loop takes
//the first function from the task queue (if there is one) and pushes it onto the call stack for execution. This process repeats, 
//allowing asynchronous tasks to be executed when their associated operations are completed.

//example

console.log("h1");
console.log("h2");

setTimeout(function()
{
    console.log("h3");

},3000);

console.log("h4");
console.log("h5");
