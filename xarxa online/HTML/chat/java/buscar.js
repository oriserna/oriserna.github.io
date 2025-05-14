const buscador = document.querySelector(".search-bar input");
const chats = document.querySelectorAll(".chat-item");

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  chats.forEach(chat => {
    const nombre = chat.querySelector(".usuari").textContent.toLowerCase();
    if (nombre.includes(texto)) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
});