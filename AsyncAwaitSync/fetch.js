//FETCH -> fetch is a function used to resolve promises which we get after API's call ,it is  given by browser. 

const url = "https://api.github.com/users";

async function abc()
{

    try {
        const usersF = await fetch(url);  //fetch() will req to server and returns a response object as promise
        const users = await usersF.json(); //this promise is in form of ReadableStream , we have to convert into JSON obj;
        console.log(users);
    } catch (error) {
        console.log(error);
    }
        
}

abc();

