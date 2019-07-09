$('.choice__tabs-hidden').click(function() {
    $('.choice__tab').removeClass('active');
    let activeBody = '.choice__content_' + $(this).attr('data-content');
    $('.choice__content').removeClass('active');
    $(activeBody).addClass('active');
    $('.choice__tab_2').addClass('active');
});

$('.choice__info').click(function (){
    $(this).find('.choice__info-modal').addClass('active');
});

$(document).on('click', function(e) {
    if (!$(e.target).closest('.choice__info').length) {
        $('.choice__info-modal').removeClass('active');
    }
    e.stopPropagation();
});

$('.choice__tab_1').click(function (){
    $('.choice__tab').removeClass('active');
    $(this).addClass('active');
    $('.choice__content').removeClass('active');
    $('.choice__content_main').addClass('active');
});