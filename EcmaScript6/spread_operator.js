let arr = [1,2,3,4,5]

function sum(b,...c)
{
    console.log(c.length);
    console.log(b);
    for(let i =0;i<c.length;i++)
    {
        console.log("values are "+c[i]);
    }
   // console.log(a,b,c);    
}

sum(...arr);