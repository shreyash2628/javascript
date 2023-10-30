//example 1

function outer()
{
    var x=100;
    function inner()
    {
        console.log(x);
    }
    return inner;
}
// var z=outer();   //this is same
// z();
outer()();   //OP->10