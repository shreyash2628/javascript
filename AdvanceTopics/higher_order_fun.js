//A function which takes another function as an argument or 
//returns a function is called higher order function.

//EXAMPLE 1-> 

    function x()        //this is Callback Function bcoz it is passed as argument
    {
        console.log("Hi x");

    }


    function y(x)       //this is Higher Order Function bcoz another fun is accepted as argument
    {
        x();
      
    }

    y(x);


//QUESTION ->
//SOLUTION 1->Non Optimised Soln

const radius = [2,1,4,3];

const areaOfCircle = function (radius)
{
    const output=[];

    for(let i=0;i<radius.length;i++)
    {
        output.push((Math.PI*radius[i]*radius[i]));
    }
    return output;
}


console.log(areaOfCircle(radius));

const CircumferenceOfCircle = function (radius)
{
    const output=[];

    for(let i=0;i<radius.length;i++)
    {
        output.push((2*Math.PI*radius[i]));
    }
    return output;
}

console.log(CircumferenceOfCircle(radius));


const DiameterOfCircle = function()
{
    const output=[];

    for(let i=0;i<radius.length;i++)
    {
        output.push((2*radius[i]));
    }
    return output;
}

console.log(DiameterOfCircle(radius));


//this is not optimised solution

//SOLUTION 2->
//OPTIMISED SOLUTION

const radius2=[2,1,4,3];

const formulaForAreaOfCircle = function(radius)
{
    return Math.PI*radius*radius;
}

const formulaForCircumferenceOfCircle = function(radius)
{
    return Math.PI*radius*2;
}

const formulaForDiameterOfCircle = function(radius)
{
    return radius*2;
}

function calculate(radius2,formula)
{
    const output=[];

    for(let i=0;i<radius2.length;i++)
    {
        output.push(formula(radius2[i]));
    }
    return output;
}

console.log(calculate(radius2,formulaForAreaOfCircle));
console.log(calculate(radius2,formulaForCircumferenceOfCircle));
console.log(calculate(radius2,formulaForDiameterOfCircle));