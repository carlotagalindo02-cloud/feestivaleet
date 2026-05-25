// =========================================
// MENÚ MÒBIL
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navMobil = document.querySelector(".nav-mobil");

  if (menuToggle && navMobil) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMobil.classList.toggle("active");
    });

    navMobil.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMobil.classList.remove("active");
      });
    });
  }

});


// =========================================
// ANIMACIÓ SPONSORS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const logos = document.querySelector(".logos");

  if (logos) {
    logos.innerHTML += logos.innerHTML;

    let position = 0;
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

});


// =========================================
// ENLLAÇ ACTIU MENÚ
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const currentUrl = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });

});


// =========================================
// SLIDERS + PUNTS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const sliders = [
    {
      section: ".entrevistes-actuals",
      container: ".cards-container",
      item: ".entrevista-principal"
    },
    {
      section: ".entrevistes",
      container: ".cards-container",
      item: ".card"
    },
    {
      section: ".collaboracions",
      container: ".grid-cards",
      item: ".card"
    }
  ];

  sliders.forEach(slider => {

    const section = document.querySelector(slider.section);
    if (!section) return;

    const container = section.querySelector(slider.container);
    if (!container) return;

    const items = container.querySelectorAll(slider.item);
    if (!items.length) return;

    const updateDots = () => {
      const gap = parseInt(getComputedStyle(container).gap) || 0;
      const itemWidth = items[0].offsetWidth + gap;

      const index = Math.round(container.scrollLeft / itemWidth) + 1;

      section.classList.remove("actiu-1", "actiu-2", "actiu-3");
      section.classList.add(`actiu-${index}`);
    };

    updateDots();

    container.addEventListener("scroll", updateDots);

  });

});


// =========================================
// NEWSLETTER + PARTICIPA
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const newsForm = document.getElementById("newsletterForm");
  const newsThanks = document.getElementById("thankYouMessage");

  if (newsForm && newsThanks) {
    newsForm.addEventListener("submit", event => {
      event.preventDefault();

      newsForm.style.display = "none";
      newsThanks.style.display = "block";
    });
  }

  const participaForm = document.querySelector(".formulari form");
  const participaThanks = document.getElementById("thanksforjoining");

  if (participaForm && participaThanks) {
    participaForm.addEventListener("submit", event => {
      event.preventDefault();

      participaForm.style.display = "none";
      participaThanks.style.display = "flex";
    });
  }

});