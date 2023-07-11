
// Scroll to Top action begin

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Scroll to Top action completed



var carouselA = document.getElementById('carouselA')
var carouselB = document.getElementById('carouselB')

carouselA.addEventListener('slide.bs.carousel', function (e) {
    var bsCarouselB = bootstrap.Carousel.getInstance(carouselB)
    bsCarouselB.to(e.to)
})

$(document).ready(function () {
    console.log("JQuery")
    $("blink").on("hover", function () {
        console.log("Hover")
    })

    var activeNavItem = $('.nav-item');

    activeNavItem.click(function () {
        activeNavItem.removeClass('active');
        $(this).addClass('active');
    });
    $({ Counter: 0 }).animate({
        Counter: $('.Prof').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Prof').text(Math.ceil(this.Counter));
        }
    });
    $({ Counter: 0 }).animate({
        Counter: $('.AssocProf').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.AssocProf').text(Math.ceil(this.Counter));
        }
    });
    $({ Counter: 0 }).animate({
        Counter: $('.SrAsstProf').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.SrAsstProf').text(Math.ceil(this.Counter));
        }
    });
    $({ Counter: 0 }).animate({
        Counter: $('.AsstProf').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.AsstProf').text(Math.ceil(this.Counter));
        }
    });
    $({ Counter: 0 }).animate({
        Counter: $('.Prog').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Prog').text(Math.ceil(this.Counter));
        }
    });
    $({ Counter: 0 }).animate({
        Counter: $('.Dtps').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Dtps').text(Math.ceil(this.Counter));
        }
    });
})