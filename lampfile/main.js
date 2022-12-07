//Callbacks in javascript - Any functions that is passed as an argument to another function is called 
//callback function in javascript
//functions are first class javascript objects
//It can also be passed into another function
//a function can be returned from another function

function greet(name){
    console.log(`hello ${name}`)
}

function greetVishwas(greetFn){
    const name = `Vishwas`
    greetFn(name)
}

greetVishwas(greet)


//Higher order function
//A function which accepts or returns function as an argument is called higher order function

function greet(name){
    console.log(`hello ${name}`)
}

function higherOrderFunction(callback){
    const name = `Vishwas`
    callback(name)
}

higherOrderFunction(greet)


