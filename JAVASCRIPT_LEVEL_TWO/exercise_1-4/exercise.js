var studentArr = []

var start = prompt("Would you like to start the web app? (y/n)")

function add(name){
  studentArr.push(name)
}

function remove(name){
  var pos = studentArr.indexOf(name)
  studentArr.splice(pos, 1)
}

function display(){
  for (student of studentArr) {
    console.log(student)
  }
}

while (start==="y") {
  if (start==="y") {
    var action = prompt("Select an action: add, remove, display, or quit.")
    if (action==="add") {
      var name = prompt("Enter the student you wish to add.")
      add(name)
    }
    if (action==="remove") {
      var name = prompt("Enter the student you wish to remove.")
      remove(name)
    }
    if (action==="display") {
      display()
    }
    if (action==="clear") {
      console.clear()
    }
    if (action==="quit") {
      break;
    }
  }
}
