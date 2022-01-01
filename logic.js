$(function() {
    var typed = new Typed('#openingText', {
        strings: ["Hello World!<br>I'm Michael Rodyushkin"],
        typeSpeed: 40
      });
      /* Every time the window is scrolled ... */
    var softwareClubLogoDone = false;
$(window).on("scroll", function(){
  var bottom_of_object;
  var bottom_of_window;
  /* Check the location of each desired element */
  $(".fadeIn").each( function(i){
    bottom_of_object = $(this).offset().top + $(this).height();
    bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},500);
    }
  }); 
  $(".slideFromLeft").each( function(i){
    bottom_of_object = $(this).offset().top + $(this).height();
    bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, slide from left */
    if( bottom_of_window > bottom_of_object ){
      $(this).addClass("w3-animate-left");
      $(this).css("opacity", "1");
    }
  });
  $(".slideFromRight").each( function(i){
    bottom_of_object = $(this).offset().top + $(this).height();
    bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, slide from right */
    if( bottom_of_window > bottom_of_object ){
      $(this).addClass("w3-animate-right");
      $(this).css("opacity", "1");
    }
  });
  // if(($(window).scrollTop() + $(window).height()) > ($("#softwareClubLogo").offset().top + $("#softwareClubLogo").height()/2) && !softwareClubLogoDone) {
    //softwareClubLogoDone = true;
    //setTimeout(changeSoftwareClubLogo, 1000);
  //}
});
});
function changeSoftwareClubLogo() {
  $("#softwareClubLogo").attr("src", "softwareClubLogo.png");
}