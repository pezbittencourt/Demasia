

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {

            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards $ {index / 7 + 0.3}s');
        });
    }


    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();

var msgCookies = document.getElementById('cookies-msg');

function aceito() {
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}

if (localStorage.lgpd == 'sim') {
    msgCookies.classList.remove('mostrar');
}

else {
    msgCookies.classList.add('mostrar');
}

ScrollReveal().reveal('.welcome', {
    origin: 'left',
    duration: 2000,
    distance: '100%'
});

ScrollReveal().reveal('.contato', {
    origin: 'left',
    duration: 2000,
    distance: '100%'
});
 


