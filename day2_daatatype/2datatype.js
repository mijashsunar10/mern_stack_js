// Data tYPE:NUMBER, string,boolean,undefined,null,bigInt

let marks = 3;
console.log(marks);
console.log(typeof (marks));


let firstName = "John";
console.log(firstName);
console.log(typeof (firstName));

let isStudent = true;
console.log(isStudent);
console.log(typeof (isStudent));

let lastName;
console.log(lastName);
console.log(typeof (lastName));

let middleName = null;
console.log(middleName);
console.log(typeof (middleName)); // object (this is a known quirk in JavaScript)

let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
console.log(bigNumber);
console.log(typeof (bigNumber));

