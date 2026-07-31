// ===== Srihari Robotics Portfolio =====

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});

// Welcome message
window.onload = function () {
    console.log("Welcome to Srihari Robotics!");

    setTimeout(() => {
        alert("🤖 Welcome to Srihari Robotics! 🚀");
    }, 500);
};

// Project card hover glow
const cards = document.querySelectorAll(".project, .card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px cyan";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 15px rgba(0,229,255,0.2)";
    });

});

// Dynamic footer year
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " Srihari Robotics | All Rights Reserved";
}
