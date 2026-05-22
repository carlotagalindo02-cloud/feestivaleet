// --- GESTIÓ DEL MENÚ MÒBIL ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobil = document.querySelector('.nav-mobil');

    if (menuToggle && navMobil) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMobil.classList.toggle('active');
        });

        const links = navMobil.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMobil.classList.remove('active');
            });
        });
    }
});


// --- ANIMACIÓ SPONSORS ---
const logos = document.querySelector(".logos");

if (logos) {

    logos.innerHTML += logos.innerHTML;

    let position = 0;

    // LENT PERÒ ES VEU
    const speed = 0.3;

    const animateSponsors = () => {

        position -= speed;

        const halfWidth = logos.scrollWidth / 2;

        if (Math.abs(position) >= halfWidth) {
            position = 0;
        }

        logos.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animateSponsors);

    };

    animateSponsors();

}


// --- IMATGES FESTIVALET ---
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.js-festivalet-slider');
    const section = document.querySelector('.festivalet');

    if (slider && section) {
        slider.addEventListener('scroll', () => {
            if (slider.scrollLeft > 20) {
                section.classList.add('imatge-dos-activa');
            } else {
                section.classList.remove('imatge-dos-activa');
            }
        });
    }
});


// --- ENTREVISTES ---
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.cards-container');
    const section = document.querySelector('.entrevistes');

    if (slider && section) {
        slider.addEventListener('scroll', () => {
            const scrollLeft = slider.scrollLeft;
            const width = slider.offsetWidth;

            section.classList.remove('punt-2', 'punt-3');

            if (scrollLeft > width * 1.5) {
                section.classList.add('punt-3');
            } else if (scrollLeft > width * 0.5) {
                section.classList.add('punt-2');
            }
        });
    }
});


// --- ENLLAÇ ACTIU MENÚ ---
document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
});


// --- NEWSLETTER ---
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletterForm');
    const thanks = document.getElementById('thankYouMessage');

    if (form && thanks) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const emailValue = document.getElementById('emailInput').value;
            console.log("Subscripció nova per a:", emailValue);

            form.style.display = 'none';
            thanks.style.display = 'block';
            thanks.style.animation = 'fadeIn 0.5s ease forwards';
        });
    }
});