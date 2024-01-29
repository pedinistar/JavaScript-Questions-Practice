// Declare a variable called myNumber and assign it the value 10.
let myNumber = 10;

// Create a variable named myString and assign it a string value.
let myString = "sneha";

// Create an array named fruits with the elements "apple," "banana," and "orange."
let fruits = ["apple", "banana", "orange"];

// Access the second element of the fruits array.
console.log(fruits[1]);

// Write a function called addNumbers that takes two parameters and returns their sum.
function addNumbers(num1, num2) {
  return num1+num2
}

// Call the addNumbers function with arguments 5 and 7.
console.log(addNumbers(5,7));

// Write a conditional statement that checks if a variable temperature is greater than 25. If true, log "It's a hot day!"; otherwise, log "It's not too hot."
let temperature = 22;
if (temperature>25) {
  console.log("It's a hot day!");
}
else {
  console.log("It's not too hot.");
}

// Create a loop that prints the numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Modify the loop to print only even numbers from 2 to 10.
for (let i = 1; i <= 5; i++) {
  if (i%2==0) {
    console.log(i);
  }
}

// Create an object named person with properties name and age.
let person = {
  name: "sneha",
  age: 20
}

// Access and log the name property of the person object.
console.log(person["name"]);

// Declare a string variable called sentence with the value "Hello, world!".
let sentence = "Hello, world!"

// Log the length of the sentence string.
console.log(sentence.length);

// Use a loop to iterate through the fruits array from question 2 and log each fruit.
fruits.forEach(function(fruit){
  console.log(fruit);
})

// Write a function named isEven that takes a number as a parameter and returns true if it's even, and false otherwise.
function isEven(num) {
  if (num%2==0) {
    return true
  }
  return false 
}

console.log(isEven(12));
console.log(isEven(121));

// Use the isEven function to check if a variable myNum is even.
console.log(isEven("myNum"));

// Add a new fruit, "grape," to the fruits array.
fruits.push("grape")
console.log(fruits);

// Remove the last element from the fruits array.
fruits.pop()
console.log(fruits);