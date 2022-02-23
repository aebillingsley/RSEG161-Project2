// -------------------------------------------------------------------------
//
// Amanda Billigsley
// RSEG 161 - Project 2
// Assignment 2-1: Arrow Functions
//
// -------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 1. Write a function calculating the average of squares of four input 
// arguments.
console.log("");
console.log("1. Write a function calculating the average of squares of four input arguments."); 
var averageOfSquares = (a, b, c, d) =>
{
    var varOutput = ((Math.pow(a, 2) + Math.pow(b, 2) + 
                      Math.pow(c, 2) + Math.pow(d, 2)) / 4);
    var logOutput = `averageOfSquares(${a}, ${b}, ${c}, ${d}): ${varOutput}`;    
    return logOutput;
}

console.log(averageOfSquares(1, 2, 3, 4));
console.log(averageOfSquares(5, 6, 7, 8));


// --------------------------------------------------------------------------
// 2.	Write a function dividing a single parameter by 2. No need for 
// parentheses required for a single parameter. 
console.log("");
console.log("2. Write a function dividing a single parameter by 2.");
var divideBy2 = param => 
{
    var varOutput = (param / 2);
    var logOutput = `divideBy2(${param}): ${varOutput}`;    
    return logOutput;
}

console.log(divideBy2(42));
console.log(divideBy2(78));