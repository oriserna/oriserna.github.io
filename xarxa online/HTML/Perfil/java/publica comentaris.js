function afegirComentari() {
    const text = document.getElementById("comentari").value.trim();
    if (text !== "") {
      const div = document.createElement("div");
      div.className = "comentari";
      div.innerHTML = `<p>${text}</p>`;
      const llista = document.getElementById("llista-comentaris");
      llista.prepend(div);
      document.getElementById("comentari").value = "";
    }
  }

  // Eliminar comentaris al recarregar la pàgina
  window.addEventListener("load", () => {
    document.getElementById("llista-comentaris").innerHTML = "";
  });