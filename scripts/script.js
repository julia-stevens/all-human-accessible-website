const footerButton = document.querySelector("footer button");

footerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const footerMenu = document.querySelector("footer ul");

    footerMenu.classList.toggle("toonMenu");
    footerButton.classList.toggle("toonMenu");
}