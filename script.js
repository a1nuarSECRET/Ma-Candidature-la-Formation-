document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  name.addEventListener("click", function () {
    alert(
      "Bonjour, je suis passionné par le développement informatique et je cherche à progresser dans ma carrière grâce à la formation DevOps."
    );
  });

  email.addEventListener("click", function () {
    alert("Vous pouvez me contacter à cette adresse pour plus d'informations.");
  });

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = "-100px"; // Ocultar encabezado al desplazarse hacia abajo
    } else {
      header.style.top = "0"; // Mostrar encabezado al desplazarse hacia arriba
    }
    lastScrollTop = scrollTop;
  });
});
