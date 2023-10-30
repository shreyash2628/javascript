//FILTER IS USED TO FILTER OUT STUFFS FROM AN ARRAY BASED ON SOME LOGIC

const arr =[1,2,3,4,5,6,7];

const odd=arr.filter((x)=>{
     if(x%2!=0)
    {
        return x;
    }
})

const greaterThan = arr.filter((x)=>{
    return x>4;
})

console.log(greaterThan);