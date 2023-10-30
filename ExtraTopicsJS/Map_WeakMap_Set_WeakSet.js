//SET
//only contains unique values
//we can store any values in a single set

let mySet = new Set();
mySet.add(1);
mySet.add("shreyash");

for(let i =0;i<10;i++)
{
    mySet.add(i.toString(2));  //to convert into binary
}
mySet.delete(1);

//mySet.clear(); to delete all values
console.log(mySet.has(1)); //returns true if exist false if doesnt exist 
console.log(mySet);




//MAP
//data is stored in keys and values pair
let myMap = new Map([["key","value"]]);
myMap.set("a1","Shreyash");
myMap.set("1","a1");
myMap.set("shreyash","a1")

console.log(myMap);


//Weak Map
