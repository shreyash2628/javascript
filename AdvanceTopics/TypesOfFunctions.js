// FUNCTION STATEMENT   [aka] FUNCTION DECLARATION

a();
function a()
{
    console.log("hi a");
}



// FUNCTION EXPRESSION

var b=function()
{
    console.log("Hi b");
}
b();


// ANONYMOUS FUNCTION
//-a function without name is anonymous function
//anonymous function is used to assign value
// function ()
// {

// }

var c=function ()
{
    console.log("I am anonymous function assigned to var c");
}

//NAMED FUNCTION EXPRESSION
var d=function x()
{
    console.log("I am named function expression");
}

c()
d()

//PARAMETERS AND ARGUMENTS

function x(params) //parameters
{
    console.log(params);
}

x("hi shreyash") //arguments


//FIRST CLASS FUNCTIONS
//the ability of a function to used as values,to pass as arguments and to return from a function 
//is called as first class function or first class citizens.



