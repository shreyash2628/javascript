//let KEYWORD
//Block-Level scope
function let_keyword(){
    let x=10;
    if(true)
    {
        let x=5;
        console.log("inside IF::"+x);     //if-block 
    }
    console.log("outside IF::"+x);      //function-block
   //O/P=inside IF::5 , outside IF::10
}

//var keyword
//Global-Level scope
function var_keyword(){
    var x=10;
    if(true)
    {
        var x=5;
        console.log("inside IF::"+x);      //if-block 
    }
    console.log("outside IF::"+x);       //function-block
    //O/P=inside IF::5 , outside IF::10
}


var_keyword()
