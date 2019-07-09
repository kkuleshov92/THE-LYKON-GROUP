$('.choice__tabs-hidden').click(function() {
    $('.choice__tabs-hidden').removeClass('active');
    $(this).addClass('active');
    let name = $(this).attr('data-name');
    $('.choice__active-tab').html(name);
    let activeBody = '.choice__content_' + $(this).attr('data-content');
    $('.choice__content').removeClass('active');
    $(activeBody).addClass('active');
});

