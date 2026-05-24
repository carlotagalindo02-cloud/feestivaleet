// --- MENÚ MÒBIL I IDIOMA ---
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobil = document.querySelector(".nav-mobil");

  if (menuToggle && navMobil) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMobil.classList.toggle("active");
    });

    const links = navMobil.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMobil.classList.remove("active");
      });
    });
  }
});


// --- ANIMACIÓ SPONSORS ---
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


// --- ENLLAÇ ACTIU MENÚ ---
document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});


// --- CARRUSELS I PUNTS ---
document.addEventListener("DOMContentLoaded", () => {
  const carrusels = [
    {
      contenidor: ".entrevistes-actuals",
      scroll: ".cards-container",
      item: ".entrevista-principal"
    },
    {
      contenidor: ".entrevistes",
      scroll: ".cards-container",
      item: ".card"
    },
    {
      contenidor: ".collaboracions",
      scroll: ".grid-cards",
      item: ".card"
    }
  ];

  carrusels.forEach(car => {
    const wrapper = document.querySelector(car.contenidor);
    const scrollElement = wrapper?.querySelector(car.scroll);

    if (!wrapper || !scrollElement) return;

    const actualitzarPunts = () => {
      const primerItem = scrollElement.querySelector(car.item);

      if (!primerItem) return;

      const gap = parseInt(getComputedStyle(scrollElement).gap) || 0;
      const ampleItem = primerItem.offsetWidth + gap;
      const index = Math.round(scrollElement.scrollLeft / ampleItem) + 1;

      wrapper.classList.remove(
        "actiu-1",
        "actiu-2",
        "actiu-3",
        "punt-1",
        "punt-2",
        "punt-3"
      );

      wrapper.classList.add(`actiu-${index}`);
    };

    actualitzarPunts();

    scrollElement.addEventListener("scroll", actualitzarPunts);
  });
});


// --- NEWSLETTER + PARTICIPA ---
document.addEventListener("DOMContentLoaded", () => {
  const newsForm = document.getElementById("newsletterForm");
  const newsThanks = document.getElementById("thankYouMessage");

  if (newsForm && newsThanks) {
    newsForm.addEventListener("submit", event => {
      event.preventDefault();

      const emailValue = document.getElementById("emailInput").value;

      console.log("Subscripció nova per a:", emailValue);

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