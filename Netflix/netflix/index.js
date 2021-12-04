$("document").ready(function() {
    $(".preview").hover(function() {
        $(this).animate({width: "308px", height: "165px"}, 400);
    });

    $(".preview").mouseleave(function() {
        $(this).animate({width: "280px", height: "150px"}, 400);
    });
});