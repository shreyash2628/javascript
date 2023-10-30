//var in es5
//let and const es6

//var is function scoped
//var is stored in window obj ,which is not good because it exposes the data



//BROWSER CONTEXT  ->  1) window obj= JavaScript represents the browser window or tab in which the web page is loaded. 
                        //It provides access to properties and methods related to the browser's environment, such as handling events,
                        // managing cookies, and opening new windows or tabs.//inshort set of those features which browser provides for use

//                     2) heap memory -> a region of memory where objects are stored.objects can be array ,variables or any objs.
//                       heap memory is dynamically allocated.When v create objs in js,the engine allocates memory for these objects in the heap as needed.
//                     JS engines has built-in garbage collectors,that identifies and reclaims the memory periodically which is no more in use.

function varFun()
{
    var x=5;
    console.log(x);

     function def(x)
    {
      x=x+2;
        console.log("inside def "+x);
    }
    def(x);
}


varFun();


//how to copy reference variable //using spread operator
const a =[1,2,3];
const b=[...a];

console.log(a);
console.log(b);
b.pop();
console.log(b);
console.log(a);