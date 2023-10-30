//... is REST OPERATOR
//instead of typing all values as parameters,we can use  ... operator which take all values as a single array 

function sum(...params)
{
    console.log(params);  // to get values as an array
    console.log(...params); // to get values without array
}

// sum(1,2,3,4,5,6,7);

//for practice answer this ques

let arr=[1,2,3,4,5]
function learn(a,b,...c)
{
    console.log(`values are ${a} and ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('messi'));
}

learn(...arr); //spread operator