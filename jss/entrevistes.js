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


/* =========================================
   SLIDER ENTREVISTES ACTUALS
   ========================================= */

const sliderActuals = document.querySelector(
  ".entrevistes-actuals .cards-container"
);

const seccioActuals = document.querySelector(
  ".entrevistes-actuals"
);

if (sliderActuals && seccioActuals) {

  sliderActuals.addEventListener("scroll", () => {

    const scrollX = sliderActuals.scrollLeft;
    const ample = sliderActuals.offsetWidth;

    const index = Math.round(scrollX / ample);

    seccioActuals.classList.remove(
      "actiu-1",
      "actiu-2",
      "actiu-3"
    );

    seccioActuals.classList.add(`actiu-${index + 1}`);
  });

}


/* =========================================
   PUNTS SLIDER ENTREVISTES ANTERIORS
   ========================================= */

const sliderEntrevistes = document.querySelector(
  ".entrevistes .cards-container"
);

const seccioEntrevistes = document.querySelector(
  ".entrevistes"
);

if (sliderEntrevistes && seccioEntrevistes) {

  sliderEntrevistes.addEventListener("scroll", () => {

    const scrollX = sliderEntrevistes.scrollLeft;

    const ampleCard =
      sliderEntrevistes.querySelector(".card").offsetWidth + 20;

    const index = Math.round(scrollX / ampleCard);

    seccioEntrevistes.classList.remove(
      "actiu-1",
      "actiu-2",
      "actiu-3"
    );

    seccioEntrevistes.classList.add(`actiu-${index + 1}`);
  });

}