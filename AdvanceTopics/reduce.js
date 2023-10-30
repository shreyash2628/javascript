//REDUCE
//when we have to come out with single value after performing some operation
//Q->Find sum of array

const arr=[1,2,13,4,5];

function findSum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)   
    {
    sum+=arr[i];
    }

    return sum;
}

console.log(findSum(arr));
//SUM USING REDUCE
const sumUsingReduce=arr.reduce((acc,curr)=>{
    acc+=curr;
    return acc;
})

console.log(sumUsingReduce);


//Q-> Find Max from arrray
//acc=>used to store results 
//curr=>represents values of array like 'i' in for loop 
const max =arr.reduce(function(acc,curr){
   if(curr>acc)
   {
    acc=curr;
   }
   return acc;
},0)

console.log(max);

//////////////////////////////////////////////////////////////////////////
const userList = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      age: 40,
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      age: 28,
    },
    {
      firstName: "David",
      lastName: "Wilson",
      age: 35,
    },
  ];
  

  const output = userList.map((x)=>{
    return x.firstName+" "+x.lastName;
  })

  console.log("ans is here ",output);