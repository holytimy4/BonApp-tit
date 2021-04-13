$(function(){

  $('.slider').slick({
    dots: true,
    arrows: false,
  });


  $('.menu__btn').on('click', function() {
    $('.header__nav-inner').toggleClass('header__nav-inner--active');
  });


  var mixer = mixitup('.gallery__content'); 
});

window.onscroll = function showHeader() {
    
  var header = document.querySelector('.header__nav-inner'); 
  
  if (window.pageYOffset > 0) {
      header.classList.add('header--grey');
  } else{
     header.classList.remove('header--grey'); 
  }
  
  
};

