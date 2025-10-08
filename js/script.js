const html = document.querySelector("html");
html.setAttribute("data-bs-theme", "dark");

document.addEventListener("DOMContentLoaded", () => {

    // TYPE JS
    var typed = new Typed('#element', {
      strings: ['Hola!', 'Somos Miriam, Marina y Rosa', 'Unas chicas que viajan', 'y lo documentan', '¿Estás listo?'],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      showCursor: false,
      onComplete: function() {
        // Espera un segundo (1000 ms) y luego reemplaza el texto con un botón
        setTimeout(function() {
          document.getElementById("element").innerHTML = '<button class="btn-gastronomia header fs-5 " onclick="window.location.href=\'lasgatas.html\'">Iniciar la Aventura</button>';
        }, 1000);
      }
    });
      
});
// GRID LUGARES
ScrollReveal().reveal(".grid-wrapper > div", {
  delay: 200,
  distance: "50px",
  interval: 100,
  origin: "bottom",
  scale: 0.9,
});

// AOS JS
function updateAOSAnimation() {
  const element = document.getElementById('special-animation');
  if (element) {
    if (window.innerWidth < 768) {
      element.setAttribute('data-aos', 'fade-left');
    } else {
      element.setAttribute('data-aos', 'fade-right');
    }
    AOS.refresh();
  }
}

window.addEventListener('resize', updateAOSAnimation);
window.addEventListener('load', updateAOSAnimation);
window.onload = function () {

  "use strict";
  AOS.init({
      duration: 2000,
  });
};