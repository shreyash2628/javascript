//classes objects inheritance and constructor

//CLASS
class Dec{

    constructor(name,course,marks)     //constructor should be written as constructor
    {
        this.name=name;
        this.course=course;
        this.marks=marks;
    }


    decreaseFun(){
        this.marks=this.marks-1;
    }
}

//OBJECT
const obj = new Dec("shreyash","BE",52);

// 

obj.decreaseFun();

// console.log(obj.marks);




//INHERITANCE

class Emp{
    constructor(){
        console.log("Constructor:Employee");
    }

    info()
    {
        console.log("emp info");
    }
}

class Manager extends Emp{      //inheriting properties of parent class EMP
    constructor(){
        super()                 //calling constructor of parent class if any
        console.log("Constructor:Manager");
    }
    info()                                             //Method overriding 
    {
        console.log("Manager info");
    }
}

const obj1 = new Manager();

obj1.info();