// Grabs all the squares
var squares = document.querySelectorAll("td")
// clears all the squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
// restart
var restrt = document.querySelector("#restart")
restart.addEventListener('click', clearBoard)
// check the square marker
function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}
// for loop to add event listeners to all the squares
for (square of squares) {
  square.addEventListener('click', changeMarker)
}
