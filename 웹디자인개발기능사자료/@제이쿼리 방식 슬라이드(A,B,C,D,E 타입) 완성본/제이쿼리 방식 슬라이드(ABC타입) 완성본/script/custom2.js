/* Slide */
// setInterval(콜백함수, 시간);
// animate(속성값, 콜백함수);
setInterval(function(){
    $('.slide-items').animate({top: '-300px'}, function(){
        $('.slide-items').css({top: 0});
        $('.slide-item:first-child').appendTo('.slide-items');
    });
}, 3500);
