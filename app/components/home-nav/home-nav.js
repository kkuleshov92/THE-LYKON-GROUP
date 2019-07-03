
$('.home-nav__ham').click(function (){
    $('.mob-menu').toggleClass('active');
});

$('.mob-menu__close').click(function (){
    $('.mob-menu').removeClass('active');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.home-nav').addClass('active');
    } else {
        $('.home-nav').removeClass('active');
    }
});