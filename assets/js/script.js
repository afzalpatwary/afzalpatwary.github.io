 // -----------menu click js----------
 
$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.menu-hamburger').toggleClass('active')
    $('.menu').toggleClass('active')
  });
});

// ****header scroll function****

      $( () => {
    
        //On Scroll Functionality
        $(window).scroll( () => {
          var windowTop = $(window).scrollTop();
          windowTop > 50 ? $('header').addClass('og-hf') : $('header').removeClass('og-hf');
        });
      });

 // -----------Owl js----------

$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
})

  // -----------counting js----------

  $('.counting').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');

      $({countNum: $this.text()}).animate({
    countNum: countTo
        },

      {

    duration: 3000,
      easing:'linear',
      step: function() {
    $this.text(Math.floor(this.countNum));
    },
      complete: function() {
    $this.text(this.countNum);
      //alert('finished');
    }

    });

  });

