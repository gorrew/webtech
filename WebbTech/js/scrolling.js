$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //Bootstrap scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // smooth scrolling
    $('nav a, .down-btn a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 110
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // parallax scrolling with stellar.js
    $(window).stellar();


});