/* Navigation */
$('.menu li, .sub-back').mouseenter(function(){
  $('.sub-menu, .sub-back').stop().slideDown()
})
$('.menu li, .sub-back').mouseleave(function(){
  $('.sub-menu, .sub-back').stop().slideUp()
})

/* Slide */
// setInterval(콜백함수, 시간);
// animate(속성값, 콜백함수);
setInterval(function(){
  $('.slide-items').animate({top: '-100%'}, function(){
    $('.slide-items').css({top: 0});
    $('.slide-item:first-child').appendTo('.slide-items');
  });
}, 3500);

/* Tab Menu */
$('.btn a:first-child').click(function () {
  $('.tab1').show()
  $('.tab2').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn a:last-child').click(function () {
  $('.tab2').show()
  $('.tab1').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})

/* Modal */
$('.open-modal').click(function () {
  $('.modal').fadeIn()
})
$('.close-modal').click(function () {
  $('.modal').fadeOut()
})