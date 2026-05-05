/* Navigation */
$('.menu li').mouseenter(function(){
    $('.sub-menu').stop().fadeIn()
})
$('.menu li').mouseleave(function(){
    $('.sub-menu').stop().fadeOut()
})

/* Modal */
$('.open-modal').click(function(){
  $('.modal').fadeIn()
})
$('.close-modal').click(function(){
  $('.modal').fadeOut()
})