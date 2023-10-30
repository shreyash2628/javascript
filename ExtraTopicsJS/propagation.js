//stopPropagation() and stopImmediatePropagation()

document.getElementById('grandparent').
    addEventListener("click",(event)=>{
        console.log("grandparent");
        //e.stopPropagation();
    })

    document.getElementById('parent').
    addEventListener('click',()=>{
        console.log("parent");
        //e.stopPropagation();
    })


    document.getElementById('child').
    addEventListener("click",(event)=>{
        console.log("child first time called ");
        event.stopPropagation();

    })


    document.getElementById('child').
    addEventListener("click",(event)=>{
        console.log("child second time called ");
        event.stopPropagation();

    })