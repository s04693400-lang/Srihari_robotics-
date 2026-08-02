// Welcome message
window.onload = function () {
    alert("🤖 Welcome to Srihari Robotics! 🚀");
};

// Scroll animation
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();
