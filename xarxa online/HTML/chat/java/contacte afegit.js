// Recuperem els contactes
  const contactes = JSON.parse(localStorage.getItem("contactes")) || [];

  const container = document.querySelector(".chat-list");

  contactes.forEach((contacte, index) => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("chat-item");

    chatItem.innerHTML = `
      <img src="../../IMAGENES/usuari-per-defecte.jpg" alt="User">
      <div class="chat-info">
        <a class="usuari" href="#">${contacte.nom}</a>
        <p>Nou contacte · Ara</p>
      </div>
      <span class="chat-icon">📷</span>
    `;

    container.prepend(chatItem); // Afegeix al principi
  });

  // Esborra els contactes després de mostrar-los
  localStorage.removeItem("contactes");