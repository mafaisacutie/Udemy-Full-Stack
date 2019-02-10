// JS Objects (Dictionaries)

var carInfo = {make:"Toyota",year:1990,model:"Camry"}
console.log(carInfo)

// grab a key value
console.log(carInfo["make"])

// flexability
var myNewO = {a:"hello",b:[1,2,3],c:{inside:['a','b']}}
console.log(myNewO)

// print letter 'b'
console.log(myNewO['c']['inside'][1])

// changing a key value
carInfo['year'] = 2006
console.log(carInfo)

// OR
carInfo['year'] += 1
console.log(carInfo)
console.dir(carInfo)

for (var key in carInfo) {
  console.log(key)
  console.log(carInfo[key])
  }

// func inside an object
var simple = {
  prop: "hello",
  myMethod: function(){
    console.log("The myMethod was called!")
  }
}

var myObj = {
  name: "Tyler",
  greet: function(){
    console.log("Hello, "+this.name+"!")
  }
}
