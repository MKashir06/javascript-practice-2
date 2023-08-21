// 1. Rewrite the following code using a ternary operator:
/* let result;
 if (score >= 80) {
     result = "Pass";
 } else {
     result = "Fail";
 }
*/
const score = 80;
let result = score >= 80 ? "Pass" : "Fail";
console.log(`Ternary Operator Conversion => ${result}`);

// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?
let person = {
  name: "Muhamad Kashir",
  address: {
    location: {
      country: {},
    },
  },
};

const chainingLocation = person?.address?.location?.country?.code;
console.log(`Chaining Operator => ${chainingLocation}`);

// 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.
/*The for...in loop and the for...of loop are both used for iterating over elements in JavaScript, but they serve
different purposes and are used in different contexts.*/

// for...in Loop:
/*The for...in loop is used to iterate over the enumerable properties of an object, including its prototype chain.
It's typically used for iterating over the keys (property names) of an object.
However, there are some important considerations to keep in mind:

It's not recommended to use for...in to iterate over arrays, as it might iterate over non-numeric properties as well as array elements.
It iterates over all enumerable properties, including those inherited from the prototype chain, which might not always be what you intend.*/
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(`for...in loop => ${key}`);
}

// for...of Loop:
/*The for...of loop is introduced in ECMAScript 2015 (ES6) and is used to iterate over iterable objects.
It provides a cleaner and more readable way to iterate over values compared to the for...in loop.

Iterable objects include arrays, strings, maps, sets, and other collection objects that implement the iterable protocol.

The for...of loop iterates over the values of the iterable, rather than the keys or indices. It's particularly useful
when you're interested in the values themselves and don't need to deal with the keys or indices.*/
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(`for...of loop => ${value}`); // Outputs: 1, 2, 3
}

// 4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.
const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return average;
};

const numbers = [1, 2, 4, 8, 16, 32, 64, 128];
const average = calculateAverage(numbers);
console.log(`Average value of numbers array => ${average}`);

// 5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.
/*In JavaScript, closures are a fundamental and powerful concept that refers to the ability of a function to "remember" and
access variables from its containing lexical scope, even after the outer function has finished executing. This creates a
self-contained environment where a function retains access to its surrounding scope's variables, even when that scope is
no longer in the call stack.

Closures are created when an inner function references variables from its outer function. The inner function "closes over"
these variables, allowing them to persist even after the outer function has completed execution.*/

const outerFunction = () => {
  const outerVariable = "I'm from the outer function";

  const innerFunction = () => {
    console.log(`Closure Example => ${outerVariable}`);
  };

  return innerFunction;
};

const closureFunction = outerFunction();
closureFunction();

/* 6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that
calculates the average of the grades. */
const student = {
  name: "Muhammad Kashir",
  age: 26,
  grades: [7, 7, 5, 80, 90, 95, 86],
  calculateAverage() {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((acc, num) => acc + num, 0);
    const average = sum / this.grades.length;
    console.log(`Average method in object ${average}`);
  },
};

student.calculateAverage();

// 7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy
/*In JavaScript, cloning an object involves creating a new object with the same properties and values as the original object.
There are different ways to clone objects, and the distinction between deep copy, shallow copy, and reference copy.

Shallow Copy: A shallow copy creates a new object, but it only copies the references to the nested objects within the original object.
The nested objects themselves are not duplicated.

Here's how you can create a shallow copy of an object:*/
const originalObjForShallow = { a: 1, b: { c: 2 } };
console.log(`Original Object => ${originalObjForShallow}`);

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, originalObjForShallow);
originalObjForShallow.b.c = 3; // Modifying the nested property
console.log(`Shallow Copy of object => ${shallowCopy.b.c}`); // (both original and shallow copy reference the same nested object)

/*Deep Copy: A deep copy creates a new object and recursively copies all the nested objects within the original object,
ensuring that they are completely independent.

Here's how you can create a deep copy of an object:*/
const originalObjForDeep = { a: 1, b: { c: 2 } };

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(originalObjForDeep));
originalObjForDeep.b.c = 3; // Modifying the nested property
console.log(`Deep Copy of object => ${deepCopy.b.c}`); // (deep copy is completely independent of the original)

/*Reference Copy: A reference copy creates a new reference to the same object, rather than creating a new object.
Both the original and the reference point to the same memory location.

Here's how you can create a reference copy of an object:*/
const originalObjForReference = { a: 1, b: { c: 2 } };

// Creating a reference copy
const referenceCopy = originalObjForReference;
originalObjForReference.b.c = 3; // Modifying the nested property
console.log(`Reference Copy of object => ${referenceCopy.b.c}`); // (both original and reference point to the same object)

// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
const numArray = [1, 2, 41, 65, 89, 66, 99, 88];

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0) {
    console.log(`${numArray[i]} is Even`);
  } else {
    console.log(`${numArray[i]} is Odd`);
  }
}

// 9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?
// i. for Loop:
/*The for loop is commonly used when you know the number of iterations in advance. It has three parts: initialization, condition
and update. The loop runs as long as the condition is true.*/
for (let i = 0; i < 5; i++) {
  console.log("For loop => ", i);
}

// ii. while Loop:
/*The while loop is used when the number of iterations is not known in advance, and the loop continues as long as the condition is true.
The loop checks the condition before each iteration.*/
let i = 0;
while (i < 5) {
  console.log("While loop => ", i);
  i++;
}

// iii.do...while Loop:
/*The do...while loop is similar to the while loop, but it checks the condition after executing the loop block.
This ensures that the loop block is executed at least once, even if the condition is false.*/
let ido = 0;
do {
  console.log("Do while loop => ", ido);
  ido++;
} while (ido < 5);

// 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.
const users = [
  { name: "Kashir", address: { city: "Karachi" } },
  { name: "Talha" },
  { name: "Atir", address: { city: "London" } },
];

for (const user of users) {
  const cityName = user.address?.city || "Not Given";
  console.log(`${user.name}'s city: ${cityName}`);
}

// 11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.
const objForInIterate = {
  fname: "Muhammad",
  lname: "Kashir",
  posts: 20,
  likes: 133,
  comments: 200,
};

for (const key in objForInIterate) {
  if (objForInIterate.hasOwnProperty(key)) {
    const value = objForInIterate[key];
    console.log(`Property name and value => key: ${key}, value: ${value}`);
  }
}

// 12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
/*The break and continue statements are control flow statements in JavaScript that allow you to modify the behavior of loops.*/

// break Statement:
/*The break statement is used to exit a loop prematurely, before the loop condition would naturally terminate the loop.
When break is encountered within a loop, the loop immediately stops executing, and the program continues with the next
statement after the loop.*/
// Scenario
/*Imagine you're searching for a specific element in an array and want to terminate the loop once you find it:*/
const numbersToBreak = [1, 2, 4, 8, 16, 32, 64, 128];
let target = 32;

for (let i = 0; i < numbersToBreak.length; i++) {
  if (numbersToBreak[i] === target) {
    console.log(`Break Sattement => Found ${target} at index ${i}`);
    break;
  }
}

// continue Statement:
/*The continue statement is used to skip the current iteration of a loop and proceed to the next iteration.
When continue is encountered, the loop body after the continue statement is skipped, and the loop moves on to the next iteration.*/
// Scenario
/*Suppose you have an array of numbers, and you want to skip and not process negative numbers:*/
const numbersToContinue = [1, 2, -4, 8, 16, -32, 64, -128];
console.log("Negative and Positive numbers array:", numbersToContinue);

for (let number of numbersToContinue) {
  if (number < 0) {
    continue; // Skip negative numbers
  }
  console.log(`Continue Statement => ${number}`);
}

/* 13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator
to determine the tax rate. */
const calculateTax = (income, tax) => {
  const calculatedTax = income <= 0 ? 0 : income * tax;

  console.log(`Tax based on amount ${calculatedTax.toFixed(2)}`);
};

calculateTax(133, 0.2);

/* 14. Create an object car with properties make, model, and a method startEngine that logs a message.
Instantiate the object and call the method.*/
const car = {
  make: "Rolls-Royce",
  model: "Ghost",
  startEngine() {
    console.log(`${this.model} launched by ${this.make} started`);
  },
};

car.startEngine();

// 15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.
// Scope
/*Regular functions have their own (this) value and a separate scope for their own variables.
They also create their own execution context when invoked.

Arrow functions, on the other hand, do not have their own (this) value or their own scope.
They inherit the (this) value from their enclosing function or context.*/

// (this) Binding:
/*The binding of the (this) keyword is one of the most significant differences between regular functions and arrow functions.

In regular functions:
The value of (this) inside a regular function depends on how the function is called. It can vary based on how the function is invoked
(as a method, a constructor, etc.). You can explicitly change the (this) value using functions like .bind(), .call(), and .apply().

In arrow functions:
Arrow functions capture the (this) value from their enclosing context. They do not have their own (this) value.
This makes arrow functions particularly useful for maintaining the value of (this) in nested functions or callbacks.*/

// Use as Methods:
/*When using regular functions as methods within objects, the this value is dynamically determined based on how the method is called.*/
const objThis = {
  regularMethod: function () {
    console.log("Regular Function called 'this' => ", this); // 'this' refers to 'objThis'
  },
};
objThis.regularMethod();

/*Arrow functions behave differently when used as methods:
Arrow functions are lexically scoped, so they inherit the this value from the surrounding code.
If you use an arrow function as a method within an object, the this value will not refer to the object itself;
it will capture the this value from the outer scope where the arrow function is defined.*/
const objArrowThis = {
  arrowMethod: () => {
    console.log("Arrow Function called 'this' => ", this); // 'this' refers to the global object or outer scope
  },
};
objArrowThis.arrowMethod();
