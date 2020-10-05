// Detect Javascript enabled
document.body.className = document.body.className.replace("no-js","js");

// header
$(window).resize(function() {
    $(document.body).css("margin-top", $(".header-fixed").height() + 80); 
}).resize();

//back-to-top
if ($('#back-to-top').length) {
    var scrollTrigger = 400, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
}