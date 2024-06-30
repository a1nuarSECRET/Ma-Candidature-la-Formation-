document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  let lastScrollTop = 0;
  let ticking = false;

  name.addEventListener("click", function () {
    alert(
      "Bonjour, je suis passionné par le développement informatique et je cherche à progresser dans ma carrière grâce à la formation DevOps."
    );
  });

  email.addEventListener("click", function () {
    alert("Vous pouvez me contacter à cette adresse pour plus d'informations.");
  });

  function toggleFooterVisibility() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;

    let bottomWindow = scrollTop + windowHeight;

    // Calcular el punto donde debería aparecer el footer
    let footerThreshold = bodyHeight - footer.offsetHeight;

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo
      header.style.top = "-100px";
      footer.style.bottom = "-100px";
    } else {
      header.style.top = "0";
      if (bottomWindow >= footerThreshold) {
        // Mostrar footer al alcanzar el umbral
        footer.style.bottom = "0";
      } else {
        footer.style.bottom = "-100px";
      }
    }
    lastScrollTop = scrollTop;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        toggleFooterVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mostrar u ocultar el footer al cargar la página
  toggleFooterVisibility();
});
