// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuButton.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");

function highlightNavigation() {

    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });

        }

    });

}

window.addEventListener("scroll", highlightNavigation);

// =========================================
// SCROLL PROGRESS BAR
// =========================================

const progressBar = document.querySelector(".scroll-progress");

function updateProgressBar() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;

}

window.addEventListener("scroll", updateProgressBar);

// =========================================
// BACK TO TOP BUTTON
// =========================================

const backToTop = document.getElementById("backToTop");

function toggleBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", toggleBackToTop);

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================================
// REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".about-card, .highlight-card, .stat-box, .skill-card, .timeline-item, .project-card, .education-card, .contact-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});

// =========================================
// HEADER SHADOW
// =========================================

const header = document.querySelector(".header");

function updateHeader() {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", updateHeader);

// =========================================
// INITIALIZE
// =========================================

window.addEventListener("load", () => {

    highlightNavigation();

    updateProgressBar();

    toggleBackToTop();

    updateHeader();

});