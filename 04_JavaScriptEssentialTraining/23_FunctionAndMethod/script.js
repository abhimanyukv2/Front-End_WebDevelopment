// Working with function

// function declararion:
function doSomeMath(a,b) {
    let c = a+b;
    return c;
};

// Function expression:
const doMoreMath = function(a,b) {
    let c = a*b;
    return c;
};

console.log("Do some math:",doSomeMath(5,6));
console.log("Do more math:",doMoreMath);
console.log("Do more math:",doMoreMath(5,6));

// Immediately Invoked Function Expression:
(function() {
    let a = 5;
    let b = 6;
    let c = doSomeMath(a,b);
    console.log(`The some of a and b is: ${c}`)
})();