alert("Hellow, Wordl!")

// anything here is a Comment

// numbers are all treated as numbers
10
20.2
-13.4

// Strings
"hello world"
// hello world

"10"
// 10

"Django is cool"
// Django is cool

"Django" + " is super cool"
// Django is super cool

"django".length
// 6

"x x".length
// 3

"hello \n start a new line"
// hello
// start a new line

"hello \t give me a tab"
// hello  give me a tab

"hello \"quotes\""
// hello "quotes"

// indexing
"hello"[0]
// hack

"hello"[3]
// l

"look at the dog"[12]
// d

// Variables
// var varName = value;
var bankAccount = 100;
var deposit = 50;
var total = bankAccount+deposit;
total
// 150

var greeting = "Welcome back: ";
var name = "Tyler";
alert(greeting+name);
// Welcome Back: Tyler | in an alert box

var myVariable
// undefined

var bonus = null;
// defined as nothing

console.log("Hey, i'm in the console")
// Hey i'm in the console | prints to the console

prompt("Enter something")
// enter something alert with tet box pops up

var age = prompt("Enter your age: ")
// opens a prompt tab and saves the entered value from someone into the car age

age
// 90

// Booleans
true
false

// undefined and null
undefined
null

// clear console
clear()

// math
2+2
// 4

5-1
// 4

3*2
// 6

10/2
// 5

2/5
// 0.4

2**4
// 16

15%14
// 1

6%2
// 0

6%4
// 2

// operators

2 == 2
// true

2 > 3
// false

"2" == 2
// true???? Fix this

"2" === 2
// false, fixed ;)

"2" === "2"
// true

"5" !== 5
// true

5 != "5"
// false

1 === 1 && 2 === 2
// true

1 === 1 && 2 === 1
// false

1 === 1 || 2 === 1
// true

(1===1)
// tre

!(1===1)
// false

!!!!!(1===1)
// false ^^ HORRIBLE CODE




// control flow
if (condition){
  //Excute some Code
}else if (condition){
  // Execute some other Code
}else{
  // Execute some backup Code
}
// ^^^ Pretty much it for control flow lol ^^^





// while loops
while (condition){
  // Execute some Code while
  // this condition is true
}

var x = 0;
while (x<5){
  console.log("x is currently: "+x)
  if (x===3){
    console.log("X IS EQUAL TO THREE!");
    break; // this will stop the entire loop once x===3
  }
  console.log("x is still less than 5, adding 1 to x")
  x = x+1;
}

// grab even numbers
num = 1;
while(num<10){
  if (num%2===0){
    console.log(num)
  }
  num = num+1;
}

// for loops
for (statement1;statement2;statement3){
  // Execute some code
}

// statement1 is executed before the loop, (the code block) starts.
for (var i =0;statement2;statement3){
  // Execute some code
}

// statement2 defines the condition for running the loop
for (var i =0;i<5;statement3){ //while i is less than 5
  // Execute some Code
}

// statement3 is executed each time after the loop cycles through.
for (var i = 0;i<5;i++){
  console.log("Number is: "+i)
  // prints
  // Number is: 0
  // Number is: 1
  // Number is: 2
  // Number is: 3
  // Number is: 4
  // into the console
}

// examples
var word = "ABCDEFGHIJK"
for (var i = 0; i < word.length; i++) {
  console.log(word[i])
  // prints
  // A
  // B
  // C
  // D
  // E
  // F
  // G
  // H
  // I
  // J
  // K
  // into the console
}

var word = "ABABABABAB"
for (var i = 0; i < word.length; i=i+2) {
  console.log(word[i])
  // prints
  // A (5)
  // into the console
}



// loop exercises
// print hello 5 times with a while loop
var x = 0;
while (x<5){
  console.log("hello")
  x++;
}

// do the same thing, but in a for loop
for (var i = 0; i < 5; i++) {
  console.log("hello")
}

// use loops to print out all odd number
// do this using two methods, while loop and for loop
var num = 1;
while (num<25){
  if (num%2!==0){
    console.log(num)
  }
  num++;
}
// for lood method
for (var num = 1; num < 25; num++) {
  if (num%2!==0){
    console.log(num)
  }
}
