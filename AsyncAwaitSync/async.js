 const url = "https://randomuser.me/api/";

async function abc()
{
   let raw=await fetch(url);  
    let ans=await raw.json();
   console.log(ans);
}

abc();