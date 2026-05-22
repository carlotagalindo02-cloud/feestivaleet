// --- MENÚ MÒBIL I IDIOMA ---
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMobil = document.querySelector('.nav-mobil');

    if (menuToggle && navMobil) {

        menuToggle.addEventListener('click', () => {

            // Activar creu i menú
            menuToggle.classList.toggle('active');
            navMobil.classList.toggle('active');

        });

        // Tancar menú quan cliques un link
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
    const speed = 0.2;

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

// --- ENLLAÇ ACTIU MENÚ ---
document.addEventListener("DOMContentLoaded", function () {

    // URL actual
    const currentUrl = window.location.pathname.split("/").pop();

    // Enllaços menú
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        if (link.getAttribute('href') === currentUrl) {

            link.classList.add('active');

        }

    });

});


// --- CARRUSELS ---
document.addEventListener("DOMContentLoaded", () => {

    const carrusels = [

        { contenidor: '.entrevistes', scroll: '.cards-container' },
        { contenidor: '.collaboracions', scroll: '.grid-cards' }

    ];

    carrusels.forEach(car => {

        const wrapper = document.querySelector(car.contenidor);
        const scrollElement = wrapper?.querySelector(car.scroll);

        if (scrollElement) {

            scrollElement.addEventListener('scroll', () => {

                const ampleCard = scrollElement.offsetWidth;
                const scrollEsquerra = scrollElement.scrollLeft;

                // Índex visible
                const index = Math.round(scrollEsquerra / ampleCard) + 1;

                // Classes punts
                wrapper.classList.remove('punt-1', 'punt-2', 'punt-3');
                wrapper.classList.add(`punt-${index}`);

            });

        }

    });

});


// --- NEWSLETTER + PARTICIPA ---
document.addEventListener('DOMContentLoaded', function () {

    // NEWSLETTER
    const newsForm = document.getElementById('newsletterForm');
    const newsThanks = document.getElementById('thankYouMessage');

    if (newsForm && newsThanks) {

        newsForm.addEventListener('submit', function (event) {

            event.preventDefault();

            const emailValue = document.getElementById('emailInput').value;

            console.log("Subscripció nova per a:", emailValue);

            newsForm.style.display = 'none';
            newsThanks.style.display = 'block';

        });

    }

    // PARTICIPA / CONTACTE
    const participaForm = document.querySelector('.formulari form');
    const participaThanks = document.getElementById('thanksforjoining');

    if (participaForm && participaThanks) {

        participaForm.addEventListener('submit', function (event) {

            event.preventDefault();

            participaForm.style.display = 'none';
            participaThanks.style.display = 'flex';

        });

    }

});


// --- ENTREVISTES ACTUALS I ANTERIORS ---
document.addEventListener('DOMContentLoaded', () => {

    // ENTREVISTES ACTUALS
    const containerActuals = document.querySelector('.entrevistes-actuals .cards-container');
    const seccioActuals = document.querySelector('.entrevistes-actuals');

    if (containerActuals && seccioActuals) {

        seccioActuals.classList.add('punts-1');

        containerActuals.addEventListener('scroll', () => {

            const scrollLeft = containerActuals.scrollLeft;
            const width = containerActuals.offsetWidth;

            const index = Math.round(scrollLeft / width) + 1;

            seccioActuals.classList.remove('punts-1', 'punts-2', 'punts-3');
            seccioActuals.classList.add(`punts-${index}`);

        });

    }

    // ENTREVISTES ANTERIORS
    const containerAnteriors = document.querySelector('.entrevistes .cards-container');
    const seccioAnteriors = document.querySelector('.entrevistes');

    if (containerAnteriors && seccioAnteriors) {

        seccioAnteriors.classList.add('punts-1');

        containerAnteriors.addEventListener('scroll', () => {

            const scrollLeft = containerAnteriors.scrollLeft;
            const width = containerAnteriors.offsetWidth;

            const index = Math.round(scrollLeft / width) + 1;

            seccioAnteriors.classList.remove('punts-1', 'punts-2', 'punts-3');
            seccioAnteriors.classList.add(`punts-${index}`);

        });

    }

});