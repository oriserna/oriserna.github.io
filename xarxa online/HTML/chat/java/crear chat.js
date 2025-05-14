function crearConversa(e) {
      e.preventDefault();
      const nom = document.getElementById("nom").value;
      if (nom.trim() !== "") {
        alert("conversa creada amb " + nom);
        // Aquí puedes redirigir a la página del chat
        // window.location.href = "chat.html?usuario=" + encodeURIComponent(nombre);
      }
    }