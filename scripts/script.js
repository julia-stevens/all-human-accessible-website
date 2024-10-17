// MENU PLAYER

const footerButton = document.querySelector("footer button");

footerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const footerMenu = document.querySelector("footer ul");

    footerMenu.classList.toggle("toonMenu");
    footerButton.classList.toggle("toonMenu");
}

// SCROLL FUNCTIE NAVIGATIE

// Bron: https://jsfiddle.net/mariusc23/s6mLJ/31/
// Hide .nav-pagina and .nav-week on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

// Targeting the nav-pagina and nav-week elements
var navPagina = $('.nav-pagina');
var navWeek = $('.nav-week');

// Get the height of the navbar (nav-pagina)
var navbarHeight = navPagina.outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(window).scrollTop(); // Get the scroll position
    
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolling down and past the navbar, add class to hide both elements
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll down: Hide the menu and nav-week
        navPagina.addClass('nav-pagina-up');
        navWeek.addClass('nav-week-up');
    } else {
        // Scroll up: Show both elements
        if (st + $(window).height() < $(document).height()) {
            navPagina.removeClass('nav-pagina-up');
            navWeek.removeClass('nav-week-up');
        }
    }
    
    lastScrollTop = st;
}
