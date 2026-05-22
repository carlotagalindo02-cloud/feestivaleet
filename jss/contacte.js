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


// --- ANIMACIÓ CARRUSEL FIRA (HISTÒRIA) ---
const firaTrack = document.querySelector(".fira-track");

if (firaTrack) {

    if (firaTrack.children.length < 18) {
        firaTrack.innerHTML += firaTrack.innerHTML;
    }

    let firaPos = 0;

    // MÉS LENT
    const firaSpeed = 0.2;

    const animateFira = () => {

        firaPos -= firaSpeed;

        if (Math.abs(firaPos) >= firaTrack.scrollWidth / 2) {
            firaPos = 0;
        }

        firaTrack.style.transform = `translateX(${firaPos}px)`;

        requestAnimationFrame(animateFira);

    };

    animateFira();

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


// --- CONTACTE / PARTICIPA ---
document.addEventListener('DOMContentLoaded', function () {

    const participaBtn = document.querySelector('.btn-custom');
    const participaThanks = document.getElementById('thanksforjoining');

    if (participaBtn && participaThanks) {

        participaThanks.style.display = 'none';

        participaBtn.addEventListener('click', function (event) {

            event.preventDefault();

            const inputs = document.querySelectorAll(
                '.inputs-column, .textarea-column, .button-container'
            );

            inputs.forEach(element => {
                element.style.display = 'none';
            });

            participaThanks.style.display = 'flex';
            participaThanks.style.opacity = '1';

            participaThanks.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

        });

    }

});


// --- TRANSPORTS ---
const scrollContainer = document.querySelector('.transports-flex');
const parentBlock = document.querySelector('.bloc-arribar');

if (scrollContainer && parentBlock) {

    scrollContainer.addEventListener('scroll', () => {

        const width = scrollContainer.offsetWidth;
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - width;

        let activeIndex;

        if (scrollLeft >= maxScroll - 10) {

            activeIndex = 2;

        } else {

            activeIndex = Math.round(scrollLeft / width);

        }

        parentBlock.classList.remove('actiu-1', 'actiu-2', 'actiu-3');

        if (activeIndex === 0) {

            parentBlock.classList.add('actiu-1');

        } else if (activeIndex === 1) {

            parentBlock.classList.add('actiu-2');

        } else {

            parentBlock.classList.add('actiu-3');

        }

    }, { passive: true });

}


// --- UBICACIÓ I TRANSPORT ---
document.addEventListener('DOMContentLoaded', () => {

    const sliderTransport = document.querySelector('.transports-flex');
    const sectionTransport = document.querySelector('.bloc-dreta');

    if (sliderTransport && sectionTransport) {

        sliderTransport.addEventListener('scroll', () => {

            const scrollLeft = sliderTransport.scrollLeft;
            const width = sliderTransport.offsetWidth;

            sectionTransport.classList.remove('actiu-2', 'actiu-3');

            if (scrollLeft > width * 1.8) {

                sectionTransport.classList.add('actiu-3');

            } else if (scrollLeft > width * 0.8) {

                sectionTransport.classList.add('actiu-2');

            }

        });

    }

});