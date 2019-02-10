function hello(name){
  console.log("Hello, "+name)
}

function helloYou(name="Test"){
  console.log("Hello, "+name)
}

function formal(name="Test", title="Sir"){
  // execute code
  return title+" "+name
}

function makeBricks(small, big, goal){
  small = small * 1
  big = big * 5
  if (big+small>=goal) {
    return true;
  }else {
    return false;
  }
}

// grab names from an array and say each of them are awesome
var arr = ["Tyler","Garrett","Dylan","Raul"]

function awesome(name){
  console.log(name+" is awesome!")
}
console.log(arr.forEach(awesome))
// returns
// Tyler is awesome! javascript.js:28:3
// Garrett is awesome! javascript.js:28:3
// Dylan is awesome! javascript.js:28:3
// Raul is awesome!
