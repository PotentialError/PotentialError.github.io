$(function() {
    var typed = new Typed('#openingHome', {
        strings: ["Hello World!<br>I'm Michael Rodyushkin"],
        typeSpeed: 40
      });

    const myCarouselElement = document.querySelector('#myCarousel')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
    })
});

