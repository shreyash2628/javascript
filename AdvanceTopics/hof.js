//calculate area .circumference and dia of given radius of circles

const radius = [1,2,3,4,5,6];

const op=radius.filter((x)=>{
    if(x%2==0) return x;
})

console.log(op);

const calcArea = function calcA(radius)
{
    return Math.PI*radius*radius;
}

const calcDiameter =function calc(radius)
{
    return radius*2;
}

const calcCircumference =function calc(radius)
{
    return radius*2*Math.PI;
}
function calc(radius,logic)
{
    let ans=[];
    for(let i=0;i<radius.length;i++)
    {
            ans.push(logic(radius[i]));
    }
    return ans;
}




console.log(calc(radius,calcDiameter));
console.log(calc(radius,calcArea));
console.log(calc(radius,calcCircumference));