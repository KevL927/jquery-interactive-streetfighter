$(document).ready(function() {
  var $mainDiv = '.main',
      $ryuDiv = '.ryu';

  $($ryuDiv).append('<p class="description-label">Left-click on Ryu to see Hadouken effect<br>or<br>Press "X" to see the Cool effect</p>')
  $($ryuDiv).append('<div class="ryu-still"></div>')

  $(document).keydown(function() {
    if (event.keyCode == 88) {
      $('div',$ryuDiv).removeClass('ryu-still').addClass('ryu-cool');
    }
  })
  .keyup(function() {
      $('div',$ryuDiv).removeClass('ryu-cool').addClass('ryu-still');
  })

  $($ryuDiv).mouseenter(function() {
    $('div', $ryuDiv).removeClass('ryu-still').addClass('ryu-ready');
  })
  .mouseleave(function() {
    $('div', $ryuDiv).removeClass('ryu-ready').addClass('ryu-still');
  })

  .mousedown(function() {
    playHadouken();
    $('div', $ryuDiv).removeClass('ryu-ready').addClass('ryu-throwing');
    $($mainDiv).append('<div class="hadouken"></div>').finish().show()
    $('.hadouken').animate(
        {'left': '1020px'},
        500,
        function() {
          $('.hadouken').remove();
          $('.hadouken').css('left', '520px');
        }
      );
  })
  .mouseup(function() {
    $('div', $ryuDiv).removeClass('ryu-throwing').addClass('ryu-ready');
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
