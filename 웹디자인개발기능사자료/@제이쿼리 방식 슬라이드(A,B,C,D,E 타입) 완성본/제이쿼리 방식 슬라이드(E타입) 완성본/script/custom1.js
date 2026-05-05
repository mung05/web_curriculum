/* Slide */
// setInterval(콜백함수, 시간);
// animate(속성값, 콜백함수);
setInterval(function(){
  $('.slide-items').animate({left: '-100%'}, function(){
    $('.slide-items').css({left: 0});
    $('.slide-item:first-child').appendTo('.slide-items');
  });
}, 3500);
