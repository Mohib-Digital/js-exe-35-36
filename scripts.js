// Chapter No.35  (Function)
// A JavaScript function is a block of code designed to perform a particular task. 
// A JavaScript function is executed when "something" invokes it (calls it).


// Without creating a function
// let now = new Date();
// let theHr = now.getHours();
// let theMin = now.getMinutes();
// console.log(`Time: ${theHr}:${theMin}`);



// funiton Declaration
// functionKeyWord funtionName() {
//   // code to be executed
// }


// using funtion 
// function currentTime() {
//   let now = new Date();
//   let theHr = now.getHours();
//   let theMin = now.getMinutes();
//   console.log(`Time: ${theHr}:${theMin}`);
// }
// function Calling
// currentTime()



// create our own function
// funtion declaration
// function greeting() {
//   console.log("Hello, Dear!")
// }
// // function call
// greeting()



// funtion with requirments
// function greetingToPerson(name) {
//   console.log("Hello, " + name + "!");
// }
// greetingToPerson("Mohib Ullah"); // Output: Hello, Mohib Ullah!

// =========================================
// =========================================



// Chapter No.36  (Functions: Passing them Data)


// Parameter vs Argument
// Parameter: The Data inside the parentheses in a function statement is knwon is parameter.
// Argument: The data inside the parentheses in a function calling is known is Argument


// Passing Data to a function
// funtion Statement / Declaration
// function sayHello(greeting) {   // Parameter
//   console.log(greeting)
// }
// function calling
// sayHello("Hello, Mohib Ullah Afridi!")    // Argument




// Passing the data using VARIABLE
// let greetingMessage = "Hello, Mohib Ullah Afridi!";
// sayHello(greetingMessage)




// A function can take any type of parameters
// function userLoginDetails(userName, password, isTrue) {
//   console.log(`The user login details: User Name:- ${userName}, Password:- ${password}, Status:-${isTrue}`);
// }

// // function calling
// userLoginDetails("Mohib-Digital", "#21201@", true)




//  Arguments order does matter
// function displayDetails(name, age, country) {
//   console.log("Name: " + name);
//   console.log("Age: " + age);
//   console.log("Country: " + country);
// }

// displayDetails(30, "Alice", "USA");
// Output
// Name: 30
// Age: Alice
// Country: USA

// The name parameter gets the value 30 instead of a name.
// The age parameter gets "Alice", which doesn't make sense for age.
// The country parameter still correctly gets "USA".

// =================================================
// =================================================




// JavaScript exercise of Chapter No.35 and Chapter No.36


// problem 01
// function greetUser(){
//   console.log("Hello, Welcome to the class")
// }

// greetUser();



// problem 02
// function displaySquare (num) {
//   console.log(num * num);
// }

// displaySquare(5)



// problem 03
// function sumOfTwoNumbers(num1, num2) {
//   console.log(`The total result of ${num1} and ${num2} is ${num1 + num2}`)
// }

// sumOfTwoNumbers(3, 7);


