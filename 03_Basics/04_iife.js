// Immediately Invoked Function Expression - 
// * function which is wrapped inside () and executed using () is called as iife .
// syntax -
// ( Any function)()
// * function which executes immediately
// * function which is used to avoid global scope pollution 
// Ex -

(function chai(){
    // named iife
    console.log("garam hai!");
})();  
// Imp - we have to end the iife with semicolon otherwise another iife will not execute it will give error
( () => {
    console.log("Chai garam hai");
})();

// using parameter
( (name) => {
    // simple iife
    console.log(`chai garm hai , ${name}`);
})("Akash")
