/* Slide */
// setInterval(콜백함수, 시간);
$('.slide-item:gt(0)').hide();
setInterval(function(){
  $('.slide-item:first-child').fadeOut(500).next().fadeIn(500);
  $('.slide-item:first-child').appendTo('.slide-items');
}, 3500);

