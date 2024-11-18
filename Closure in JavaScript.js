
A closure in JavaScript is a function that "remembers" the variables from its outer scope even after the outer function has finished executing. Closures are a powerful feature of JavaScript that allow functions to access variables in the scope they were created in.

Key Concepts:
1. Scope Chain: Functions in JavaScript have access to:
   Their own local variables.
   Variables in their parent (enclosing) scopes.
   Global variables.

    
2. Closure: A closure is created when:
    A function is defined inside another function.
    The inner function retains access to the outer function's variables, even after the outer function has returned.


Example ::

      function outerFunction() {
    let count = 0; // Local variable in outerFunction

    return function innerFunction() {
        count++; // Accessing `count` from outerFunction's scope
        return count;
    };
}

const counter = outerFunction();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3



Explanation:
-> outerFunction is called and returns innerFunction.
-> The returned innerFunction keeps a reference to the count variable, even though outerFunction has finished executing.
