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
console.log("1. Write a function calculating the average of squares of ",
            "four input arguments."); 
var averageOfSquares = (a, b, c, d) =>
{
    return ((Math.pow(a, 2) + Math.pow(b, 2) + 
             Math.pow(c, 2) + Math.pow(d, 2)) / 4);
}

console.log("averageOfSquares(1, 2, 3, 4): ", averageOfSquares(1, 2, 3, 4));
console.log("averageOfSquares(5, 6, 7, 8): ", averageOfSquares(5, 6, 7, 8));


// --------------------------------------------------------------------------
// 2. Write a function dividing a single parameter by 2. No need for 
// parentheses required for a single parameter. 
console.log("");
console.log("2. Write a function dividing a single parameter by 2.");
var divideBy2 = param => 
{
    return (param / 2);
}

console.log("divideBy2(42): ", divideBy2(42));
console.log("divideBy2(78): ", divideBy2(78));

// --------------------------------------------------------------------------
// 3. Use empty parentheses if no input parameter: get random number
// and truncate it. 
console.log("");
console.log("3. Use empty parentheses if no input parameter: get random ", 
            "number and truncate it.");
var randomNumTruncate = () =>
{
    var randNum = (Math.random() * 100);
    var truncNum = Math.trunc(randNum);
    var logOutput = `randomNumTruncate(): ${randNum} -> ${truncNum}`;    
    return logOutput;
}

console.log(randomNumTruncate());
console.log(randomNumTruncate());

// --------------------------------------------------------------------------
// 4. Use curly braces for complex arrow functions: in an array of 
// integers numbers find an index of a selected number and return it. 
console.log("");
console.log("4. Use curly braces for complex arrow functions: in an array ",
            "of integers numbers find an index of a selected number and ", 
            "return it.");
var indexOf = ([...numArray], numFind) =>
{
    var indexVal = 0;
    for (const num of numArray)
    {
        if (num == numFind)
        {
            break;
        }
        else
        {
            indexVal += 1;
        }
    }
    
    return indexVal;
}

console.log("indexOf([1, 2, 3, 4, 5], 3): ", indexOf([1, 2, 3, 4, 5], 3));
console.log("indexOf([6, 7, 8, 9],    9): ", indexOf([6, 7, 8, 9], 9));

// --------------------------------------------------------------------------
// 5. Convenient to use braces if an arrow function has several lines: 
// given the legs of a triangle, calculate the hypothenuse and return it.
console.log("");
console.log("5. Convenient to use braces if an arrow function has several ",
            "lines: given the legs of a triangle, calculate the hypothenuse ",
            "and return it.");
var hypothenuseLength = (leg1, leg2) =>
{
    return Math.sqrt(Math.pow(leg1,2) + Math.pow(leg2,2));
}

console.log("hypothenuseLength(3,  4): ", hypothenuseLength(3, 4));
console.log("hypothenuseLength(5, 12): ", hypothenuseLength(5, 12));

// --------------------------------------------------------------------------
// 6. Parentheses needed to return an object literal: for two input numbers 
// calculate stats (i.e their average and the distance between them).
console.log("");
console.log("6. Parentheses needed to return an object literal: for two ",
            "input numbers calculate stats (i.e their average and the ",
            "distance between them).");
var getStats = (num1, num2) =>
{
    var numAvg = ((num1 + num2) / 2);
    var numDif = (num2 - num1);
    
    var output = {
        average: numAvg,
        distance: numDif
    }
    return (output);
}

console.log("getStats(2,  6): ", getStats(2, 6));
console.log("getStats(4, 12): ", getStats(4, 12));
