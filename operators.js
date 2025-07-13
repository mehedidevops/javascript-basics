// Operators
//1. arithmetic  
//2. assignment 
//3. comparison 
//4. equality
//5. ternary 
//6. logical
//7. logocal with non boolean
//8. bitwise 

//1. arithmetic
let nubemerA = 30;
let nubemerB = 10;
let finalNumberAddition = nubemerA+nubemerB;
let finalNumberSubtraction = nubemerA-nubemerB;
let finalNumberMultiplication = nubemerA*nubemerB;
let finalNumber4 = nubemerA-nubemerB;
let finalNumber5 = nubemerA-nubemerB;
//console.log(finalNumber5);

//2. assignment

let y = 10;

// x++; 
// x = x + 1

// x = x * 5;
// x *=5;


// comparison

let x = 1;

//Relational 
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);


// //Equality
// console.log(x === 1);
// console.log(x !== 1);

//==========================
// strict equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);


// // lose equality (Value)
// console.log(1 == 1);
// console.log('1' == 1);

// ternary
//If a customer has more than 100 points,
//they are a 'gold' customer, otherwise 
//they are a 'silver' customer

let points = 90;

let typeOfCustomer = points > 100 ? 'gold' : 'silver' 
//console.log(typeOfCustomer);

//logical

// Logical and &&,  ||
//Returns TRUE if both operands are TRUE

//console.log(false || true);

// Logical = && or ||
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT (!)
let applicationrefused = !eligibleForLoan;
console.log('Application Refused', applicationrefused)

// Falsy (false)
//undefined
// null
//0
//false
//''
//NaN

//Anything that is not falsy - > Truthy