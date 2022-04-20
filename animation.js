// caroussel
window.onload = function () {
  var slides = document.getElementsByClassName('swiper-slide'),
    addActive = function (slide) { slide.classList.add('active') },
    removeActive = function (slide) { slide.classList.remove('active') };
  addActive(slides[0]);

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        setTimeout(removeActive, 2000, slides[i]);
        break;
      }
      if (slides[i].classList.contains('active')) {
        slides[i].removeAttribute('style');
        setTimeout(removeActive, 2000, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 4000);
}


//compteur
$(document).ready(function () {
  $('.num').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {
        duration: 1000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }

      });
  });
});

//scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


//navtop

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $('#header').addClass('fixedTopNav');
  } else {
    $('#header').removeClass('fixedTopNav');
  }
});


//nav mobile

function openNav() {
  let sidenav = document.getElementById("sidenav");
  sidenav.classList.toggle('d-block');
  sidenav.classList.toggle('w400');
}

function closeNav() {
  document.getElementById("sidenav").style.width = "-400px";
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
