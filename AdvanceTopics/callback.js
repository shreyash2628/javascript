function x(y)
{
        y();
}

x(function y()
{
    console.log("y");
})