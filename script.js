// ===============================
// Typing Animation
// ===============================

const texts = [
    "AI & Machine Learning Engineer",
    "Full Stack Developer",
    "Python Developer",
    "Deep Learning Enthusiast",
    "Django Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

        return;
    }

    setTimeout(type, 90);

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 250);

        return;

    }

    setTimeout(erase, 40);

}


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll(
".hero,.section-title,.about-content,.skill-card,.timeline-item,.project-card,.contact-box"
);

const reveal = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Smooth Fade-in
// ===============================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// Console Message
// ===============================

console.log("Portfolio Loaded Successfully 🚀");