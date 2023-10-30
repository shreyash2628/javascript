//await suspends entire async function until promise is resolved

//QUE 1
// async function example() {
//     console.log('Start');
//     await Promise.resolve('Async Work');
//     console.log('End of example');
//   }
  
//   example();
//   console.log('After function call');

  


//QUE 2
//  async function delayLog() {
//     console.log('Start');
//     await new Promise(resolve => setTimeout(resolve, 1));
//     console.log('End of delay');
//   }
  
//   console.log('Before calling delayLog');
//   delayLog();
//   console.log('After calling delayLog');




  //QUE 3

//   async function fetchData() {
//     console.log('Fetching data...');
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     return 'Data received';
//   }
  
//   async function main() {
//     console.log('Start');
//     const data = await fetchData();
//     console.log('Data:', data);
//     console.log('End');
//   }
  
//   main();
  
  // "start" -> main function gets suspended and fetchData() is called ,then "Fetching Data..."
  // Again due to await fetchData gets Suspended for 2 secs , after 2 secs promise is resolved
  //then fetchData function returns "Data Received " then main() comes into call stack again
  // then Data: Data received -> End

  //Start
  //Fetching Data...
  //Data:Data received
  //End




  //QUE 4
//   async function logNumbers() {
//     console.log(1);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log(2);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log(3);
//   }
  
//   console.log('Start');
//   logNumbers();
//   console.log('End');



  //QUE 5
//   async function execute() {
//     console.log('A');
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log('B');
//   }
  
//   console.log('Start');
//   execute();
//   console.log('End');

  
  //Que 6
   const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved After 5 secs");
    },11000);
   })

   const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved After 10 secs");
    },16000);
   })

  async function main()
   {
    console.log("Start of p1");

    //if we use .then() it will print promise <pending> and move ahead
   const promise1= p1.then((data)=>{
            return data;
    })
   // const promise1 = await p1;
    console.log("before getting promise 1");
    console.log(promise1);
    console.log("End of p1");

    console.log("Start of P2");
    const promise2 = await p2;      
    console.log(promise2);
    console.log("End of p2"); 
}


//if p1>p2 both will take p1 time 
//if p1=p2 both will resolved parallely and display 
//if p1<p2 p1 will resolve first then after few secs p2 will get resolved 
main();
console.log("main function is suspended");
