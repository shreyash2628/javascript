//CLOSURES

function x(){
    var a=50;               //lexical scope
    return function y()
    {
        console.log(a);
    }
   // return y;   //closure was returned //fun along with its lexical scope
}
var z=x();  //it will asign whatever value x will return

//function y will remember its lexical scopes variable a's value

//z()     

//since var a is private ,its scope is block scope, inside fun
//x only,still with the help of closures ,we can access it outside also


//DEEPER EXAMPLE

function outerMost()
{
    var p=100;
    function outer()
    {
        var q=50;

        function inner()
        {
            console.log(p,q);       //lexical scope of p and q is accessible
        }
        inner()
    }
    outer()
}
 outerMost()