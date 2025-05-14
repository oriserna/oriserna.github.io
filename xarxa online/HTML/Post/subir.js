document.getElementById("postForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const titol = document.getElementById("title").value.trim();
  const descripcio = document.getElementById("description").value.trim();
  const imatgeInput = document.getElementById("imageInput");

  const reader = new FileReader();
  reader.onload = function(e) {
    const imatgeBase64 = e.target.result;
    const publicacions = JSON.parse(localStorage.getItem("publicacions")) || [];
    publicacions.push({ titol, descripcio, imatge: imatgeBase64 });
    localStorage.setItem("publicacions", JSON.stringify(publicacions));
    window.location.href = "../Publicacions/publicacions.html";
  };

  reader.readAsDataURL(imatgeInput.files[0]);
});