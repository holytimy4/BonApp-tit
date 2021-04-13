$(function(){

  $('.slider').slick({
    dots: true,
    arrows: false,
  });


  $('.menu__btn').on('click', function() {
    $('.header__nav-inner').toggleClass('header__nav-inner--active');
  });


  var mixer = mixitup('.recipes__content'); 
});

window.onscroll = function showHeader() {
    
  var header = document.querySelector('.header__nav-inner'); 
  
  if (window.pageYOffset > 0) {
      header.classList.add('header--grey');
  } else{
     header.classList.remove('header--grey'); 
  }
  
  
};



$(function(){
  $("#recipes__content").mixItUp({
 
  });
});

const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var morebtn = document.getElementById("more-btn");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    morebtn.innerHTML = "Показать рецепт";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    morebtn.innerHTML = "Скрыть";
    more.style.display = "inline";
  }
}

function readMore2() {
  var dots2 = document.getElementById("dots2");
  var more2 = document.getElementById("more2");
  var morebtn2 = document.getElementById("more-btn2");

  if(dots2.style.display === "none") {
    dots2.style.display = "inline";
    morebtn2.innerHTML = "Показать рецепт";
    more2.style.display = "none";
  } else {
    dots2.style.display = "none";
    morebtn2.innerHTML = "Скрыть";
    more2.style.display = "inline";
  }
}

function readMore3() {
  var dots3 = document.getElementById("dots3");
  var more3 = document.getElementById("more3");
  var morebtn3 = document.getElementById("more-btn3");

  if(dots3.style.display === "none") {
    dots3.style.display = "inline";
    morebtn3.innerHTML = "Показать рецепт";
    more3.style.display = "none";
  } else {
    dots3.style.display = "none";
    morebtn3.innerHTML = "Скрыть";
    more3.style.display = "inline";
  }
}

function readMore4() {
  var dots4 = document.getElementById("dots4");
  var more4 = document.getElementById("more4");
  var morebtn4 = document.getElementById("more-btn4");

  if(dots4.style.display === "none") {
    dots4.style.display = "inline";
    morebtn4.innerHTML = "Показать рецепт";
    more4.style.display = "none";
  } else {
    dots4.style.display = "none";
    morebtn4.innerHTML = "Скрыть";
    more4.style.display = "inline";
  }
}

function readMore5() {
  var dots5 = document.getElementById("dots5");
  var more5 = document.getElementById("more5");
  var morebtn5 = document.getElementById("more-btn5");

  if(dots5.style.display === "none") {
    dots5.style.display = "inline";
    morebtn5.innerHTML = "Показать рецепт";
    more5.style.display = "none";
  } else {
    dots5.style.display = "none";
    morebtn5.innerHTML = "Скрыть";
    more5.style.display = "inline";
  }
}

function readMore6() {
  var dots6 = document.getElementById("dots6");
  var more6 = document.getElementById("more6");
  var morebtn6 = document.getElementById("more-btn6");

  if(dots6.style.display === "none") {
    dots6.style.display = "inline";
    morebtn6.innerHTML = "Показать рецепт";
    more6.style.display = "none";
  } else {
    dots6.style.display = "none";
    morebtn6.innerHTML = "Скрыть";
    more6.style.display = "inline";
  }
}


function readMore7() {
  var dots7 = document.getElementById("dots7");
  var more7 = document.getElementById("more7");
  var morebtn7 = document.getElementById("more-btn7");

  if(dots7.style.display === "none") {
    dots7.style.display = "inline";
    morebtn7.innerHTML = "Показать рецепт";
    more7.style.display = "none";
  } else {
    dots7.style.display = "none";
    morebtn7.innerHTML = "Скрыть";
    more7.style.display = "inline";
  }
}


function readMore8() {
  var dots8 = document.getElementById("dots8");
  var more8 = document.getElementById("more8");
  var morebtn8 = document.getElementById("more-btn8");

  if(dots8.style.display === "none") {
    dots8.style.display = "inline";
    morebtn8.innerHTML = "Показать рецепт";
    more8.style.display = "none";
  } else {
    dots8.style.display = "none";
    morebtn8.innerHTML = "Скрыть";
    more8.style.display = "inline";
  }
}

function readMore9() {
  var dots9 = document.getElementById("dots9");
  var more9 = document.getElementById("more9");
  var morebtn9 = document.getElementById("more-btn9");

  if(dots9.style.display === "none") {
    dots9.style.display = "inline";
    morebtn9.innerHTML = "Показать рецепт";
    more9.style.display = "none";
  } else {
    dots9.style.display = "none";
    morebtn9.innerHTML = "Скрыть";
    more9.style.display = "inline";
  }
}

$('.menu__btn').on('click', function() {
  $('.header__inner').toggleClass('header__inner--active');
});