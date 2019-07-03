
$('.home-nav__ham').click(function (){
    $('.mob-menu').addClass('active');
});

$('.mob-menu__close').click(function (){
    $('.mob-menu').removeClass('active');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.home-nav').addClass('active');
    } else {
        $('.home-nav').removeClass('active');
    }
});