// function statement
function greet(){
    console.log('Hi');
}
greet();

// functions are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

// function expression
// const greetMe =  function() {
//     console.log('Hi Tony');
// }
const greetMe =  () => {
    console.log('Hi Tony');
}
greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function () {
    console.log('Hello Tony!');
});

logGreeting( () => {
    console.log('Hello Tony!!');
});