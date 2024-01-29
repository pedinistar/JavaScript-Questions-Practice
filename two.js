let numbers = [3,6,9,12,15]
let indexOF9 = numbers.indexOf(9)
console.log(indexOF9);


function reverseArray(myArr) {
  return myArr.reverse()
}

console.log(reverseArray(numbers));


const myObj = {
  title: "Shoe Dog",
  author: "Phil Knight",
  getInfo: function () {
    return `The title of book is ${this.title} and it's author is ${this.author}`
  }
}


function checkTemperature(temp) {
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

console.log(checkTemperature(23));
console.log(checkTemperature(32));
console.log(checkTemperature(30));
console.log(checkTemperature(19));



let greeting = "Good morning, everyone!"
for (let i = 0; i < greeting.length; i++) {
  if (greeting[i]!==" ") {
    console.log(greeting[i]);
  }
}


const car = {
  brand: "Rolls Royce",
  model: "latest",
  year: 2024
}

let newArr = []
for (const key in car) {
  newArr.push(car[key])
}
console.log(newArr);



function multiplyByTwo(num) {
  return num*2
}

let arr = [3,4,5,6]
let myNewArr = arr.map(multiplyByTwo, arr);
console.log(myNewArr);


function filterEvenNumbers(arr) {
  let newArr = []
  arr.forEach(element => {
    if (element%2==0) {
      newArr.push(element)
    }
  });
  return newArr
}

let myArr2 = [2,3,4,54,90,3]
console.log(filterEvenNumbers(myArr2));


const anotherObj = [
  {
    name: "sneha",
    age: 20
  },
  {
    name: "surbhi",
    age: 20
  },
  {
    name: "shubham",
    age: 15
  },
  {
    name: "nikita",
    age: 19
  }
]

function findYoungest(arr) {
  arr.forEach((element)=>{
    let youngest = element[0][age];
    if (element[age] < youngest) {
      
    }
  })
}