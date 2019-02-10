var firstName = prompt("What is your First Name: ")
var lastName = prompt("What is your Last Name: ")
var age = prompt("How old are you: ")
var height = prompt("How tall are you (cm): ")
var petName = prompt("What is your pets name: ")

// Method 1

// if (firstName[0] === lastName[0]){
//   // console.log("breakpoint 1")
//   if (age > 20 && age < 30){
//     // console.log("breakpoint 2")
//     if (height >= 170){
//       // console.log("breakpoint 3")
//       if (petName[petName.length-1] === "y"){
//         // console.log("breakpoint 4")
//         console.log("Welcome to the website Mr. Spy!")
//       }
//     }
//   }
// }

// Method 2
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0] === lastName[0]){
  nameCond = true;
}else{
  nameCond = false;
}

if (age > 20 && age < 30){
  ageCond = true;
}else{
  ageCond = false;
}

if (height >= 170){
  heightCond = true;
}else{
  heightCond = false;
}

if (petName[petName.length-1] === "y"){
  petCond = true;
}else{
  petCond = false;
}

if (nameCond && ageCond && heightCond && petCond){
  console.log("Welcome to the website Mr. Spy!")
}else{
  console.log("Hello, "+firstName+"!")
}
