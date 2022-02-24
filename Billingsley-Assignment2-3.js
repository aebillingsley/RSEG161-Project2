// -------------------------------------------------------------------------
//
// Amanda Billigsley
// RSEG 161 - Project 2
// Assignment 2-3: Nested Objects Destructuring
//
// -------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 1. Create and initialize an employee object. 
console.log("");
console.log("1. Create and initialize an employee object.");

var employee = {
    name: 'Mr Godzilla',
    salary: 155000,
    job: {title: 'Junior Monster'}
};

console.log("Initial employee Object:");
console.log(employee);

// --------------------------------------------------------------------------
// 2.Create an empty employeeCopy object and assign its reference to the 
// employee object reference.
console.log("");
console.log("2. Create an empty employeeCopy object and assign its ",
            "reference to the employee object reference.");
            
var employeeCopy = employee;

console.log("Initial employeeCopy Object:");
console.log(employeeCopy);

// --------------------------------------------------------------------------
// 3. Change employee object job title and salary.
console.log("");
console.log("3. Change employee object job title and salary.");

employee.salary = 252000;
employee.job.title = 'Senior Monster';

console.log("employee Object After Changing Title and Salary:");
console.log(employee);

// --------------------------------------------------------------------------
// 4. Output employeeCopy object proving that employeeCopy object has an 
// updated job title and salary.
console.log("");
console.log("Output employeeCopy object proving that employeeCopy object ",
            "has an updated job title and salary.");

console.log("employeeCopy Object From employee Changes:");
console.log(employeeCopy);