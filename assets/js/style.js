    $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
            });
//doc ready        
    });
//flex slider
$(document).ready(
        (function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false,
  });
})
)

    