// Var

// Var is function scoped 
// var is the traditional way of declaring the variable in javascript.Variable with var are fucntion-scoped or globally scoped but not block scope.They should be hosisted to the top of fucntion or golablly scope.Which might lead to the problem and make debugging difficult.
 function varExample() {

    var x = 10;
    console.log(x); // 10



 }
varExample();
console.log(x); // ReferenceError: x is not defined



// var has some quirks and drawbacks, especially related to variable hoisting and its lack of block scope. Due to these issues, let and const were introduced It si genrally used let and const instead of var in modern JavaScript development.