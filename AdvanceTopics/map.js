//MAP FUNCTION IS USED TO TRANSFORM AN ARRAY

//-to convert an existing array into new one
//example- const arr = [5,1,2,3,4];
//double =[10,2,4,6,8];

console.log("hi");
const arr=[5,1,2,3,4];

//Q- to double
const op=arr.map((x)=>{
    return x*2;
})

console.log(op);

//Q- To triple
function triple(x)
{
  return x*3;
}

const op3=arr.map(triple)

console.log(op3);

//Q- to convert into binary

const opB=arr.map(function(x)
{
    return x.toString(2);
})

console.log(opB);