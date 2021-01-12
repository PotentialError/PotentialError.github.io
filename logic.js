$(function() {
    var typed = new Typed('#openingText', {
        strings: ["Hello World!<br>I'm Michael Rodyushkin"],
        typeSpeed: 40
      });
      /* Every time the window is scrolled ... */
$(window).on("scroll", function(){

  /* Check the location of each desired element */
  $(".test").each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},500);
    }
  }); 
  $(".test2").each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > bottom_of_object ){
      $(this).addClass("w3-animate-left")
    }
  });
});
});