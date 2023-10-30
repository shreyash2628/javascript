//await keyword is used inside async function only
//It is used to resolve promise
//ex



function getApi()
{
    return new Promise((resolve,reject)=>{


            setTimeout(()=>{
                resolve("promise Resolved in 4 SEC's !!!");
            },4000);
            return resolve;
    })
}


async function  FunAwait()
{
    console.log("HI");
    const promise = await getApi();
    console.log("HELLO");
    console.log(promise);


}


FunAwait()


function FunThen()
{
    console.log("Hi");
    getApi().then((promise)=>{
        console.log(promise);
    })
    console.log("Hello");


}


FunThen();