document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");

    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const comentari = commentInput.value.trim();
      if (comentari === "") return;

      // Emmagatzemem el comentari temporalment en sessionStorage
      sessionStorage.setItem("comentariTemporer", comentari);

      // Redireccionem cap a la pàgina del perfil
      window.location.href = "../Perfil/Index_Perfil.html"; // Substitueix amb la ruta real del perfil
    });
  });