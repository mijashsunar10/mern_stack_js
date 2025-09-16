// let is the keyword which is used to declare a variable in javascript.
// let is block scoped 
// let is a modern way of declaring variables in JavaScript. Variables declared with let are block-scoped, meaning they are only accessible within the block (enclosed by curly braces {}) where they are defined. This helps prevent issues related to variable hoisting and scope leakage that can occur with var.

let y = 20; // Global scope
console.log(y); // 20

function letExample() {
    let z = 30; // Function scope
    console.log(z); //
    console.log(y); // 20
}

// console.log(z); // ReferenceError: z is not defined
letExample();

// In var we can reassign and redeclare the variable but in let we can reassign the variable but we cannot redeclare the variable in the same scope.
 let a = 50;
 a = 60; // Reassignment is allowed
 console.log(a); // 60

//  but redeclartion is not allower
// let a = 70; SyntaxError: Identifier 'a' has already been declared