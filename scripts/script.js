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

// current time

function updateCurrentTimeIndicator() {
    const currentTimeIndicator = document.getElementById('current-time');
    const timeElements = document.querySelectorAll('aside time');
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    // Get the first and last time element positions to calculate the total height/width
    const firstTimeElement = timeElements[0];
    const lastTimeElement = timeElements[timeElements.length - 1];
    
    const aside = document.querySelector('aside');
    
    // Check the screen width
    const isDesktop = window.innerWidth >= 1100;

    // Get the offset of the first and last time elements
    const firstTimePosition = isDesktop ? firstTimeElement.offsetLeft : firstTimeElement.offsetTop;
    const lastTimePosition = isDesktop ? lastTimeElement.offsetLeft : lastTimeElement.offsetTop;

    // Calculate the total available height (mobile) or width (desktop) between the first and last time elements
    const totalTimeSpan = lastTimePosition - firstTimePosition;

    // Total number of hours (from 00:00 to 23:59 -> 24 hours)
    const totalHours = 24;

    // Calculate the size per hour based on the total available space (height for mobile, width for desktop)
    const sizePerHour = totalTimeSpan / totalHours;

    // Calculate the exact position for the current hour and minute
    const currentHourPosition = (currentHour * sizePerHour) + firstTimePosition;
    const minuteFraction = currentMinutes / 60; // Fraction of the hour
    const indicatorPosition = currentHourPosition + (minuteFraction * sizePerHour);

    // Apply a small offset (e.g., +3px) to move the indicator slightly
    const adjustedPosition = indicatorPosition + 3;  // Adjust this value as needed

    // Update the position of the current time indicator
    if (isDesktop) {
        // For desktop, align the indicator vertically (i.e., use 'left' positioning)
        currentTimeIndicator.style.left = `${adjustedPosition}px`;
        currentTimeIndicator.style.top = '';  // Reset top for desktop
    } else {
        // For mobile, align the indicator horizontally (i.e., use 'top' positioning)
        currentTimeIndicator.style.top = `${adjustedPosition}px`;
        currentTimeIndicator.style.left = '';  // Reset left for mobile
    }

    // Display the current time next to the indicator
    const currentFormattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Remove previous time display if it exists
    const existingDisplay = document.querySelector('.current-time-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }

    // Create and position the current time display
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'current-time-display'; // Create a class for styling if needed
    timeDisplay.textContent = currentFormattedTime;

    // Position the current time display near the indicator
    timeDisplay.style.position = 'absolute';

    if (isDesktop) {
        // For desktop, align the time display above the indicator (horizontally)
        timeDisplay.style.left = `${adjustedPosition - 20}px`; // Adjust as needed
        timeDisplay.style.top = '5%';  // Adjust based on your design
    } else {
        // For mobile, align the time display above the indicator (vertically)
        timeDisplay.style.top = `${adjustedPosition - 20}px`; // Adjust as needed
        timeDisplay.style.left = '5%'; // Adjust based on your design
    }

    // Append the time display to the aside
    aside.appendChild(timeDisplay);
}

// Update the current time indicator on page load
updateCurrentTimeIndicator();

// Update the indicator every second (1000 ms) for real-time display
setInterval(updateCurrentTimeIndicator, 1000);

// Recalculate position on window resize to adapt for screen size changes
window.addEventListener('resize', updateCurrentTimeIndicator);

