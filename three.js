// # Exercise 1: Object Manipulation


// Your code here:

// Create an object called 'student' with properties 'name', 'age', and 'grade'.
const student = {
  name: "sneha",
  age: 20,
  grade: 12
}

// Set the values accordingly and log the entire object.
console.log(student);

// Update the 'grade' property to 'B' and log the updated object.
student.grade = "B"
console.log(student);


// # Exercise 2: Function with Callback


// Your code here:

// Write a function called 'performOperation' that takes two numbers and a callback function as parameters.
function performOperation(num1, num2, operation) {
  return operation(num1, num2)
}

// The callback function should perform an operation (e.g., add, subtract, multiply, divide) on the two numbers.
function add(a,b) {
  return a+b
}

function subtract(a,b) {
  return a-b
}

function multiply(a,b) {
  return a*b
}

function divide(a,b) {
  if (b===0) {
    return "You can't divide by 0"
  }
  return (a/b).toFixed(2)
}

// Call the 'performOperation' function with different callback functions.
console.log(performOperation(2,3,add));
console.log(performOperation(2,3,subtract));
console.log(performOperation(2,3,multiply));
console.log(performOperation(2,3,divide));



// # Exercise 3: Array Manipulation


// Your code here:

// Create an array named 'colors' with at least 5 color names.
const colors = ["red","blue","green","yellow","pink"]

// Use array methods to add two more colors to the beginning of the array and two more colors to the end of the array.
colors.unshift("aliceblue")
colors.unshift("black")
console.log(colors);

colors.push("brown")
colors.push("white")
console.log(colors);

// Log the final 'colors' array.
console.log(colors);




// # Exercise 4: Conditional Logic

// and 'It's cold!' if it's less than 20.
// Call the function with different temperature values.

// Your code here:

// Write a function called 'weatherStatus' that takes a temperature as a parameter.
function weatherStatus(temp) {
  if (temp>30) {
    return "Too hot!"
  }
  else if (temp>20 && temp<=30) {
    return "Comfortable"
  }
  else {
    return "Too cold!"
  }
}

