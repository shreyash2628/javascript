const obj1 = new Object({
name:"shreyash",
age:"23",

})

const obj2 = new Object({
    rollNo:5,
    proto:obj1
}) 



console.log(obj2.proto.name);