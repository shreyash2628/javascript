//THIS KEYWORD IN JS

let laptop1 = {
    cpu:"i9",
    ram:16,
    brand:'asus',
    getConfig:function()
    {
        return this.cpu;
    }
}

let laptop2 = {
    cpu:"i7",
    ram:8,
    brand:'hp',
    getConfig:()=>
    {
        //return cpu;     // getting error cpu not defined
       // console.log(this.cpu);
        return this.cpu;
    }
}

let x =laptop2.getConfig()
console.log(x);