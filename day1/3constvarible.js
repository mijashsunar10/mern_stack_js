// In javascirpt const is keyword is used to decalre the varibale but we cann chnge the value once it is assigned.
// const is block scoped 
// const is also block-scoped, similar to let. This means that a variable declared with const is only accessible within the block where it is defined.

const PI = 3.14;
console.log(PI); // 3.14

function constExample() {
    const E = 2.71;
    console.log(E); // 2.71
    console.log(PI); // 3.14
}

constExample();

// console.log(E); // ReferenceError: E is not defined

// PI = 4; TypeError: Assignment to constant variable.

// const E = 3;  SyntaxError: Identifier 'E' has already been declared