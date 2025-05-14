// Guarda el nou contacte al localStorage
function crearConversa(event) {
  event.preventDefault();
  const nom = document.getElementById('nom').value.trim();
  if (!nom) return;

  // Recuperem contactes existents o array buit
  const contactes = JSON.parse(localStorage.getItem('contactes')) || [];

  // Afegim el nou contacte
  contactes.push({
    nom: nom,
    imatge: '../../IMAGENES/default.jpg', // pots canviar-ho més tard per seleccionar foto
    missatge: 'Nou contacte creat · ara',
    link: `../chat/conversa_${contactes.length + 1}.html`
  });

  localStorage.setItem('contactes', JSON.stringify(contactes));
  window.location.href = "../chat/chat.html"; // redirigeix al xat
}