var header = $("#header");
var menu = $("menu");

$(window).on("scroll", function(){
    if($(this).scrollTop() > 30){
        $("#header").addClass("scrolledHeader");
        menu.slideUp();
    }else{
        $("#header").removeClass("scrolledHeader");
        menu.slideDown();
    }
});