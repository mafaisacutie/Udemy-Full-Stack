// MOUSE CLICK
$('h1').click(function(){
  $(this).text("I was changed by a click")
})

// KEY PRESS
$('input').eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue');
  }
})

// on()
$('h1').on('dblclick', function(){
  $(this).toggleClass('turnBlue');
})

$('h1').on('mouseenter', function(){
  $(this).toggleClass('turnBlue');
})

// events and animations
// api.jquey.com/category/effects
$('input').eq(1).on('click', function(){
  $('.container').fadeOut(3000);
})

$('input').eq(1).on('click', function(){
  $('.container').slideUp(3000);
})
