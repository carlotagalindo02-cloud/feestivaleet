// --- 1. MENÚ MÒBIL I IDIOMA ---
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMobil = document.querySelector('.nav-mobil');
    const logo = document.querySelector('.logo a');

    if (menuToggle && navMobil) {

        const closeMenu = () => {

            menuToggle.classList.remove('active');
            navMobil.classList.remove('active');

        };

        menuToggle.addEventListener('click', () => {

            menuToggle.classList.toggle('active');
            navMobil.classList.toggle('active');

        });

        // Tancar menú amb links o logo
        const links = navMobil.querySelectorAll('a');

        links.forEach(link => {

            link.addEventListener('click', closeMenu);

        });

        if (logo) {

            logo.addEventListener('click', closeMenu);

        }

    }

// --- ANIMACIÓ FIRA / ENTREVISTES ---
const firaTrack = document.querySelector('.fira-track');

if (firaTrack) {

    let posicio = 0;

    // UNA MICA MÉS RÀPID
    const velocitat = 0.08;

    firaTrack.innerHTML += firaTrack.innerHTML;

    const animarFira = () => {

        posicio -= velocitat;

        if (Math.abs(posicio) >= firaTrack.scrollWidth / 2) {
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

    // --- 3. ENLLAÇOS ACTIUS DEL MENÚ ---
    const currentUrl = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        if (link.getAttribute('href') === currentUrl) {

            link.classList.add('active');

        }

    });

    // --- 4. SLIDER COL·LABORACIONS (Puntets) ---
    const sliderCollab = document.querySelector('.grid-cards');
    const seccioCollab = document.querySelector('.collaboracions');

    if (sliderCollab && seccioCollab) {

        sliderCollab.addEventListener('scroll', () => {

            const scrollX = sliderCollab.scrollLeft;

            const firstCard = sliderCollab.querySelector('.card');

            if (firstCard) {

                const cardWidth = firstCard.offsetWidth + 15;

                const index = Math.round(scrollX / cardWidth);

                seccioCollab.classList.remove('punt-2', 'punt-3');

                if (index === 1) {

                    seccioCollab.classList.add('punt-2');

                } else if (index >= 2) {

                    seccioCollab.classList.add('punt-3');

                }

            }

        });

    }

    // --- 5. TIMELINE SCROLL ---
    const timeline = document.querySelector('.timeline-grid');
    const bgLine = document.querySelector('.background-line');

    if (timeline && bgLine) {

        timeline.addEventListener('scroll', () => {

            const scrollX = timeline.scrollLeft;

            bgLine.style.left = `${-scrollX * 0.2}px`;

        });

    }

    // --- 6. FORMULARI NEWSLETTER ---
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

    // --- 7. INTERSECTION OBSERVER (Cards) ---
    const observerOptions = {

        root: document.querySelector('.grid-cards'),
        threshold: 0.5

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const section = document.querySelector('.collaboracions');

                const targetes = Array.from(
                    document.querySelectorAll('.collaboracions .card')
                );

                const index = targetes.indexOf(entry.target);

                section.classList.remove('punt-2', 'punt-3');

                if (index === 1) {

                    section.classList.add('punt-2');

                } else if (index === 2) {

                    section.classList.add('punt-3');

                }

            }

        });

    }, observerOptions);

    document.querySelectorAll('.collaboracions .card').forEach((card) => {

        observer.observe(card);

    });

});