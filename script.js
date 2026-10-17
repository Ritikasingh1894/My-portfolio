
/* ========================================
   RITIKA SINGH — PORTFOLIO JAVASCRIPT
======================================== */


const welcomeScreen = document.getElementById("welcomeScreen");
const knowMeBtn = document.getElementById("knowMeBtn");
const portfolioContent = document.getElementById("portfolioContent");

knowMeBtn.addEventListener("click", function () {
    // Completely hide the welcome screen
    welcomeScreen.style.display = "none";

    // Reveal the entire portfolio
    portfolioContent.classList.remove("portfolio-hidden");
    portfolioContent.classList.add("portfolio-visible");

    // Start the portfolio from the top
    window.scrollTo(0, 0);
});


// Reveal the main portfolio when the welcome button is clicked
knowMeBtn.addEventListener("click", function () {
    welcomeScreen.hidden = true;

    portfolioContent.classList.remove("portfolio-hidden");
    portfolioContent.classList.add("portfolio-visible");

    // Start at the top of the main portfolio
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
});


// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// Close mobile navigation after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    });
});


// Current year in footer
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
