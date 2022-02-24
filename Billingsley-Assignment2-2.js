// -------------------------------------------------------------------------
//
// Amanda Billigsley
// RSEG 161 - Project 2
// Assignment 2-2: Default Argument
//
// -------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 1. Define the average1 arrow function as the sum of five input positive 
// integers divided by the number of these integers. Call average1 with 
// all five arguments. In other words, no default arguments for average1 
// arrow function.

console.log("");
console.log("1. Define the average1 arrow function as the sum of five ",
            "input positive integers divided by the number of these ", 
            "integers. Call average1 with all five arguments. In ", 
            "other words, no default arguments for average1 arrow ",
            "function.");

var average1 = (a, b, c, d, e) =>
{
    return (a + b + c + d + e)/5;
}

console.log("average1(1, 2, 3, 5, 8): ", average1(1, 2, 3, 8, 8));


// --------------------------------------------------------------------------
// 2. Define the average2 arrow function, that is different from average1 
// by the last argument having a default value equal to next to last 
// variable. Call average2 with four arguments.

console.log("");
console.log("2. Define the average2 arrow function, that is different ",
            "from average1 by the last argument having a default value ",
            "equal to next to last variable. Call average2 with four ",
            "arguments.");

var average2 = (a, b, c, d, e = d) =>
{
    return (a + b + c + d + e)/5;
}

console.log("average2(1, 2, 3, 5): ", average2(1, 2, 3, 5));

// --------------------------------------------------------------------------
// 3. Define the average3 arrow function, that is different from average2 
// by the next to last argument having some value as a default and the 
// last argument has a default equal to next to last variable. Call 
// average3 with three arguments.

console.log("");
console.log("3. Define the average3 arrow function, that is different ",
            "from average2 by the next to last argument having some ", 
            "value as a default and the last argument has a default ", 
            "equal to next to last variable. Call average3 with three ",
            "arguments.");

var average3 = (a, b, c, d = 4, e = d) =>
{
    return (a + b + c + d + e)/5;
}

console.log("average3(1, 2, 3): ", average3(1, 2, 3));

// --------------------------------------------------------------------------
// 4. Define the average4 arrow function, that is different from average3 
// by the last argument variable having no default value. The next to 
// last argument still has a default value. Call average4 with four 
// arguments

console.log("");
console.log("4. Define the average4 arrow function, that is different ", 
            "from average3 by the last argument variable having no ", 
            "default value. The next to last argument still has a ",
            "default value. Call average4 with four arguments");

var average4 = (a, b, c, d = 4, e) =>
{
    return (a + b + c + d + e)/5;
}

console.log("average4(1, 2, 7, 9): ", average4(1, 2, 7, 9));
