document.addEventListener("DOMContentLoaded", () => {
    const comentari = sessionStorage.getItem("comentariTemporer");

    if (comentari) {
      const perfilContainer = document.querySelector(".profile-container");

      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const comentariText = document.createElement("p");
      comentariText.classList.add("post-text");
      comentariText.textContent = comentari;

      const likeBtn = document.createElement("button");
      likeBtn.classList.add("like-button");
      likeBtn.textContent = "Likes: 0";

      likeBtn.addEventListener("click", () => {
        let actualLikes = parseInt(likeBtn.textContent.replace("Likes: ", ""));
        likeBtn.textContent = `Likes: ${actualLikes + 1}`;
      });

      const data = document.createElement("p");
      data.classList.add("date");

      // Data actual en format dd/mm/yyyy
      const avui = new Date();
      const dia = String(avui.getDate()).padStart(2, '0');
      const mes = String(avui.getMonth() + 1).padStart(2, '0');
      const any = avui.getFullYear();
      data.textContent = `Data: ${dia}/${mes}/${any}`;

      // Afegim tot al bloc .post
      postDiv.appendChild(comentariText);
      postDiv.appendChild(likeBtn);
      postDiv.appendChild(data);

      // Afegim el post com el primer (al principi de la llista)
      perfilContainer.insertBefore(postDiv, perfilContainer.querySelector(".post"));

      // Eliminem el comentari del sessionStorage perquè no reaparegui
      sessionStorage.removeItem("comentariTemporer");
    }
  });