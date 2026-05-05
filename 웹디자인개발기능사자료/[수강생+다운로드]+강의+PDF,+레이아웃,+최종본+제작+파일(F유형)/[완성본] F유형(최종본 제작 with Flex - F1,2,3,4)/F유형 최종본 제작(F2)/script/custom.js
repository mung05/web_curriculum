/* Navigation */
$('.menu li').mouseenter(function(){
  $(this).children('.sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').stop().slideUp()
})

/* Slide */
// setInterval(콜백함수, 시간);
$('.slide-item:gt(0)').hide();
setInterval(function(){
  $('.slide-item:first-child').fadeOut(500).next().fadeIn(500);
  $('.slide-item:first-child').appendTo('.slide-items');
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