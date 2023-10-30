//EXAMPLE 1

// function fun() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000*i);
//         console.log("hi");
//     }

// }

// fun()

//since we used var i ,it will point to same reference of i,
//thats y it will get updated to 5 then it will print 55555


//EXAMPLE 2
// function fun2() {
//     for(let i=1;i<=5;i++)
//     {
//       setTimeout(()=>{
//         console.log(i);
//       },i*1000)

//     } 
    
//     console.log("namaste");
// }


// fun2();

//since we are using let,new copy of variable i will be created ,and that function will
//have new closure with different values of i



//EXAMPLE 3

//now using closure and var we can also run the execution

function fun3()
{
    for(var i=1;i<=5;i++)
    {
        function close(i)
        {
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }

        close(i)
    }
}

fun3()