document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       MENÚ MÒBIL
       ========================================= */

    const menuToggle = document.querySelector('.menu-toggle');
    const navMobil = document.querySelector('.nav-mobil');
    const linksMobil = document.querySelectorAll('.nav-list-mobil a');

    if (menuToggle && navMobil) {

        menuToggle.addEventListener('click', () => {

            // OBRIR / TANCAR MENÚ
            menuToggle.classList.toggle('active');
            navMobil.classList.toggle('active');

        });

        // LINK ACTIU MÒBIL
        linksMobil.forEach(link => {

            link.addEventListener('click', () => {

                linksMobil.forEach(l => l.classList.remove('active'));

                link.classList.add('active');

                menuToggle.classList.remove('active');
                navMobil.classList.remove('active');

            });

        });

    }

    /* =========================================
       SLIDER FESTIVALET
       ========================================= */

    const sliderFestivalet = document.querySelector('.js-festivalet-slider');
    const seccioFestivalet = document.querySelector('.festivalet');

    if (sliderFestivalet && seccioFestivalet) {

        sliderFestivalet.addEventListener('scroll', () => {

            const posicioScroll = sliderFestivalet.scrollLeft;
            const ampleSlider = sliderFestivalet.clientWidth;

            if (posicioScroll > (ampleSlider / 2)) {

                seccioFestivalet.classList.add('imatge-dos-activa');

            } else {

                seccioFestivalet.classList.remove('imatge-dos-activa');

            }

        });

    }

    /* =========================================
       GASTRONOMIA
       ========================================= */

    const sliderGastro = document.querySelector('.images-gastronomia');
    const seccioGastro = document.querySelector('.festivalet-gastronomia');

    if (sliderGastro && seccioGastro) {

        sliderGastro.addEventListener('scroll', () => {

            const posicioScroll = sliderGastro.scrollLeft;
            const ampleSlider = sliderGastro.clientWidth;

            if (posicioScroll > (ampleSlider / 2)) {

                seccioGastro.classList.add('imatge-dos-activa');

            } else {

                seccioGastro.classList.remove('imatge-dos-activa');

            }

        });

    }

    /* =========================================
       ALLOTJAMENTS
       ========================================= */

    const categories = document.querySelectorAll('.categoria');

    categories.forEach(categoria => {

        const slider = categoria.querySelector('.cards-wrapper');

        if (slider) {

            slider.addEventListener('scroll', () => {

                const posicioScroll = slider.scrollLeft;
                const ampleSlider = slider.clientWidth;

                if (posicioScroll > (ampleSlider / 2)) {

                    categoria.classList.add('imatge-dos-activa');

                } else {

                    categoria.classList.remove('imatge-dos-activa');

                }

            });

        }

    });

    /* =========================================
       UBICACIÓ I TRANSPORT
       ========================================= */

    const transportSlider = document.querySelector('.transports-flex');
    const blocDreta = document.querySelector('.bloc-dreta');

    if (transportSlider && blocDreta) {

        transportSlider.addEventListener('scroll', () => {

            const index = Math.round(
                transportSlider.scrollLeft / transportSlider.clientWidth
            );

            blocDreta.classList.remove(
                'actiu-1',
                'actiu-2',
                'actiu-3'
            );

            if (index === 0) {

                blocDreta.classList.add('actiu-1');

            } else if (index === 1) {

                blocDreta.classList.add('actiu-2');

            } else {

                blocDreta.classList.add('actiu-3');

            }

        });

    }

    /* =========================================
       IDIOMA
       ========================================= */

    const dropdownIdioma = document.querySelector('.dropdown-idioma');
    const submenuIdiomes = document.querySelector('.submenu-idiomes');

    if (dropdownIdioma && submenuIdiomes) {

        dropdownIdioma.addEventListener('click', (e) => {

            if (window.innerWidth <= 768) {

                e.preventDefault();

                submenuIdiomes.classList.toggle('obert');
                dropdownIdioma.classList.toggle('active');

            }

        });

    }

    /* =========================================
       PÀGINA ACTIVA
       ========================================= */

    const currentUrl = window.location.pathname.split('/').pop();

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        if (link.getAttribute('href') === currentUrl) {

            link.classList.add('active');

        }

    });

    /* =========================================
       NEWSLETTER
       ========================================= */

    const form = document.getElementById('newsletterForm');
    const thanks = document.getElementById('thankYouMessage');

    if (form && thanks) {

        form.addEventListener('submit', function (event) {

            event.preventDefault();

            const emailValue = document.getElementById('emailInput').value;

            console.log(
                'Subscripció nova per a:',
                emailValue
            );

            form.style.display = 'none';

            thanks.style.display = 'block';

            thanks.style.animation =
                'fadeIn 0.5s ease forwards';

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