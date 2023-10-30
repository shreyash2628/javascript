//promise
const url ='https://jsonplaceholder.typicode.com/todos/1'
const data =fetch(url).then((x)=>{
    console.log(x);

    return x.json();
}).then((data)=>{
    console.log("data in json");
    console.log(data);
    return data;
});


setTimeout(()=>{
    console.log(data);

},5000)



//Creating our own promises
const person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  };
const promise = createOrder(1234);
//console.log(promise);

promise.then((promise)=>{
    setTimeout(()=>{
        console.log("getting promise");
        console.log(promise);
    },3000);
}).catch((err)=>{
    setTimeout(()=>{
        console.log("resolving error ");
        console.log(err);
    },1000);
})

function createOrder(orderId){
    console.log("creating order");
    var promise = new Promise((resolve,reject)=>{
        if(isValidate(orderId))
        {
         //return promise success
             resolve(person)
        }
        else{
            // const err = new Error("not validated");
         //return promise reject
         reject("err msg")
        }
    })
    return promise;
  
}



function isValidate(orderId)
{
    console.log("validating order Id");
    return true;
}


