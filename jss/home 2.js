// --- MENÚ MÒBIL I IDIOMA ---
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMobil = document.querySelector('.nav-mobil');
    const logo = document.querySelector('.logo a');
    const links = document.querySelectorAll('.nav-list-mobil a');

    // Obrir / tancar menú
    if (menuToggle && navMobil) {

        menuToggle.addEventListener('click', () => {

            menuToggle.classList.toggle('active');
            navMobil.classList.toggle('active');

        });

        // Tancar menú + posar link actiu
        links.forEach(link => {

            link.addEventListener('click', () => {

                links.forEach(l => l.classList.remove('active'));

                link.classList.add('active');

                menuToggle.classList.remove('active');
                navMobil.classList.remove('active');

            });

        });

        // Tancar menú amb el logo
        if (logo) {

            logo.addEventListener('click', () => {

                menuToggle.classList.remove('active');
                navMobil.classList.remove('active');

            });

        }

    }

    // --- IMATGES FESTIVALET ---
    const slider = document.querySelector('.js-festivalet-slider');
    const festivalet = document.querySelector('.festivalet');

    if (slider && festivalet) {

        slider.addEventListener('scroll', () => {

            if (slider.scrollLeft > 50) {

                festivalet.classList.add('imatge-dos-activa');

            } else {

                festivalet.classList.remove('imatge-dos-activa');

            }

        });

    }

    // --- ANIMACIÓ HISTÒRIA ---
const firaTrack = document.querySelector('.fira-track');

if (firaTrack) {

    // Duplicar contingut per efecte infinit
    firaTrack.innerHTML += firaTrack.innerHTML;

    let posicio = 0;

    // UNA MICA MÉS RÀPID
    const velocitat = 0.10;

    const animarFira = () => {

        posicio -= velocitat;

        const halfWidth = firaTrack.scrollWidth / 2;

        // Reiniciar quan arriba al final
        if (Math.abs(posicio) >= halfWidth) {

            posicio = 0;

        }

        firaTrack.style.transform = `translateX(${posicio}px)`;

        requestAnimationFrame(animarFira);

    };

    animarFira();

}

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

    // --- ENTREVISTES ---
    const cardsSlider = document.querySelector('.cards-container');
    const entrevistes = document.querySelector('.entrevistes');

    if (cardsSlider && entrevistes) {

        cardsSlider.addEventListener('scroll', () => {

            const scrollLeft = cardsSlider.scrollLeft;
            const width = cardsSlider.offsetWidth;

            entrevistes.classList.remove('punt-2', 'punt-3');

            if (scrollLeft > width * 1.5) {

                entrevistes.classList.add('punt-3');

            } else if (scrollLeft > width * 0.5) {

                entrevistes.classList.add('punt-2');

            }

        });

    }

    // --- PÀGINA ACTIVA ---
    const currentUrl = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        if (link.getAttribute('href') === currentUrl) {

            link.classList.add('active');

        }

    });

    // --- NEWSLETTER ---
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