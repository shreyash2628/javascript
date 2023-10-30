//4 pillars of DOM

//1)Selection of an Element
console.log("hi");
let x = document.getElementById('myDiv');
console.log(x);


//2)Changing html
let y=document.querySelector('p').innerHTML="badal barsa bichaloi sawan ka pani ";
//or let y =document.querySelector('p');
//y.innerHTML="asdasd";
console.log(y);


//3)Changing css
let a=document.querySelector('h1');
//querySelectorAll('h1') -> to select every h1 tag present 
a.style.color="red"


//4)Event Listener
let btn = document.querySelector('.clickBtn');
btn.addEventListener('click',function(){
    y.innerHTML="me badal gaya teri ex ki tarah";
    x.style.backgroundColor="blue";
    btn.innerHTML="hahaha";

})
