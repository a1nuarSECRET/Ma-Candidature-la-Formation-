document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  name.addEventListener("click", function () {
    alert(
      "Bonjour, je suis passionné par le développement informatique et je cherche à progresser dans ma carrière grâce à la formation DevOps."
    );
  });

  email.addEventListener("click", function () {
    alert("Vous pouvez me contacter à cette adresse pour plus d'informations.");
  });
});
