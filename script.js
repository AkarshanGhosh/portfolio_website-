let menuLinks = document.getElementById("menu-link");

document.querySelectorAll('ul#menu-link li').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let targetSection = this.innerText.toLowerCase().replace(" ", "-");

        if (targetSection === "home") {
            // If the target section is "Home", scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // For other sections, scroll to the corresponding section
            document.getElementById(targetSection).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close the menu if open (assuming you have a 'show-menu' class for the open menu)
        menuLinks.classList.remove('show-menu');
    });
});

function toggleMenu() {
    menuLinks.classList.toggle('show-menu');
}

window.onscroll = function () {
    let navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.background = '#eefff9';
    } else {
        navbar.style.background = 'transparent';
    }
};