$(window).on("load", function () {

    let option;
    let hauteur;

    if ($(window).width() <= 767) {
        option = 2500;
        hauteur = $(window).height() * 0.80;
    } else {
        option = 500;
        hauteur = $(window).height();
    }

    $(window).on("scroll", function () {
        position = $("html").scrollTop();
        if (position > hauteur) {
            $('nav').addClass('fixed');
            $('.logo-home').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
            $('.logo-home').removeClass('fixed');
        }
    });


    let taille = $(".mosaique").css('height');

    $(".mosaique").animate({
        height: '700px'
    }, option);


    $(".deroulement").click(function () {
        if ($(".mosaique").css('height') == "700px") {
            // $(".mosaique").css('height','auto');
            $(".mosaique").animate({
                height: taille
            }, option);
            $(".deroulement img").css('transform', 'rotate(0.5turn)');
        } else {
            $(".mosaique").animate({
                height: '700px'
            }, option);
            $(".deroulement img").css('transform', 'rotate(0)');
        }
    })

});




