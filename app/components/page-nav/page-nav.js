
$('.page-nav__ham').click(function (){
    $('.mob-menu').toggleClass('active');
});

$('.mob-menu__close').click(function (){
    $('.mob-menu').removeClass('active');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.page-nav').addClass('active');
    } else {
        $('.page-nav').removeClass('active');
    }
});