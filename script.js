/* ==========================================
   DOM ELEMENTS
========================================== */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const mobileToggle = document.getElementById("mobile-toggle");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const revealElements = document.querySelectorAll(".reveal");
const progressBar = document.querySelector(".scroll-progress");

/* ==========================================
   MOBILE MENU
========================================== */

if (mobileToggle) {

    mobileToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        mobileToggle.classList.toggle("active");

    });

}

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        mobileToggle.classList.remove("active");

    });

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

function updateProgressBar() {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

}

/* ==========================================
   NAVBAR EFFECT
========================================== */

function updateNavbar() {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(9,11,18,.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(9,11,18,.75)";
        navbar.style.boxShadow = "none";

    }

}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});

/* ==========================================
   CARD HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 25;
        const rotateY = (x - rect.width / 2) / 25;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(
    ".social-btn, .project-links a, .nav-cta"
);

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   PARALLAX HERO GLOW
========================================== */

const heroGlow = document.querySelector(".hero-glow");

window.addEventListener("mousemove", e => {

    if (!heroGlow) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 30;

    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    heroGlow.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [

        "Software QA Engineer",
        "Automation Test Engineer",
        "Playwright Automation",
        "SDET"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, deleting ? 45 : 90);

    }

    typeEffect();

}

/* ==========================================
   INITIAL LOAD
========================================== */

window.addEventListener("load", () => {

    revealOnScroll();

    updateNavbar();

    updateActiveNav();

    updateProgressBar();

});

/* ==========================================
   SCROLL EVENTS
========================================== */

window.addEventListener("scroll", () => {

    revealOnScroll();

    updateNavbar();

    updateActiveNav();

    updateProgressBar();

});

/* ==========================================
   RESIZE
========================================== */

window.addEventListener("resize", () => {

    updateProgressBar();

});

/* ==========================================
   END
========================================== */