/* Navigation : 상단 메가 메뉴 */
$('.menu li').mouseenter(function(){
    $('.sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $('.sub-menu').stop().slideUp()
})

/* Navigation : 상단 개별 메뉴 */
/*
$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})
*/

/* Tab Menu */
$('.btn a:first-child').click(function(){
    $('.tab1').show()
    $('.tab2').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
$('.btn a:last-child').click(function(){
    $('.tab2').show()
    $('.tab1').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})

/* Modal */
$('.open-modal').click(function(){
    $('.modal').fadeIn()
})
$('.close-modal').click(function(){
    $('.modal').fadeOut()
})