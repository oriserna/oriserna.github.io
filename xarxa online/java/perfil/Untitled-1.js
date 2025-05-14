// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Cargar datos de localStorage al cargar la página
    loadState();

    // Agregar eventos a botones de likes
    document.querySelectorAll(".like-btn").forEach((button) => {
        button.addEventListener("click", handleLike);
    });

    // Agregar eventos a botones de seguidores
    document.getElementById("followers-btn").addEventListener("click", () => {
        updateFollowers("followers-count");
    });

    document.getElementById("following-btn").addEventListener("click", () => {
        updateFollowers("following-count");
    });
});

// Manejar likes
function handleLike(event) {
    const postElement = event.target.closest(".post");
    const postId = postElement.dataset.postId;
    const likeCountElement = postElement.querySelector(".like-count");
    const currentLikes = parseInt(likeCountElement.textContent);

    // Actualizar el número de likes
    const newLikes = currentLikes + 1;
    likeCountElement.textContent = newLikes;

    // Guardar en localStorage
    saveToLocalStorage(`post-${postId}-likes`, newLikes);
}

// Actualizar seguidores/seguidos
function updateFollowers(elementId) {
    const countElement = document.getElementById(elementId);
    const currentCount = parseInt(countElement.textContent);

    // Incrementar en 1 (puedes cambiar esta lógica)
    const newCount = currentCount + 1;
    countElement.textContent = newCount;

    // Guardar en localStorage
    saveToLocalStorage(elementId, newCount);
}

// Guardar en localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Cargar datos de localStorage
function loadState() {
    // Cargar likes de cada publicación
    document.querySelectorAll(".post").forEach((postElement) => {
        const postId = postElement.dataset.postId;
        const likeCountElement = postElement.querySelector(".like-count");
        const savedLikes = localStorage.getItem(`post-${postId}-likes`);

        if (savedLikes) {
            likeCountElement.textContent = savedLikes;
        }
    });

    // Cargar seguidores/seguidos
    ["followers-count", "following-count"].forEach((key) => {
        const savedCount = localStorage.getItem(key);
        if (savedCount) {
            document.getElementById(key).textContent = savedCount;
        }
    });
}
