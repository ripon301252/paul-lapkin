//mixitup plugin
var mixer = mixitup('.work-grid');

// wow
wow = new WOW({
    mobile: false,      
  })
  wow.init();

  //Hamburger Menu
  function openMenu(){
    document.getElementById('hb-menu').style.width = '100%';
  }

  function closeMenu(){
    document.getElementById('hb-menu').style.width = '0%';
  }

  // scroll-smooth
  $('.hb-menu li a, .next-section a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
    }, 1000);
    return false
  });

  