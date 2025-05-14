document.addEventListener("DOMContentLoaded", () => {
  const publicacions = JSON.parse(localStorage.getItem("publicacions")) || [];
  const container = document.querySelector(".container");

  publicacions.forEach(publi => {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
      <div class="post-header">
        <img src="../../../IMAGENES/usuari.png" alt="Usuari">
        <span class="username">@Fitverseonline</span>
      </div>
      <img src="${publi.imatge}" alt="Publicació" class="post-image">
      <div class="post-content">
        <h2>${publi.titol}</h2>
        <p>${publi.descripcio}</p>
      </div>
      <div class="post-actions">
        <button class="post-button">❤️ Likes: 0</button>
        <a href="#" class="post-button">💬 Comenta</a>
      </div>
    `;
    container.prepend(post);
  });

  // 🔥 Esborra les publicacions del localStorage quan ja s'han mostrat
  localStorage.removeItem("publicacions");
});