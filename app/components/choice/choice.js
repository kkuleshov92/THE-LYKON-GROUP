$('.choice__tabs-hidden').click(function() {
    $('.choice__tabs-hidden').removeClass('active');
    $(this).addClass('active');
    let name = $(this).attr('data-name');
    $('.choice__active-tab').html(name);
    let activeBody = '.choice__content_' + $(this).attr('data-content');
    $('.choice__content').removeClass('active');
    $(activeBody).addClass('active');
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