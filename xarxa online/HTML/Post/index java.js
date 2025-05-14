const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

// Cargar publicaciones desde el almacenamiento local
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  postsContainer.innerHTML = '';

  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <img src="${post.image}" class="post-image" alt="Imagen de la publicación">
      <h2>${post.title}</h2>
      <p>${post.description}</p>
      <button class="like-button" data-index="${index}">❤️ Me gusta (${post.likes || 0})</button>
      <button class="delete-button" data-index="${index}">Eliminar</button>
      <div class="comment-section">
        <h3>Comentarios:</h3>
        <div class="comments" data-index="${index}">
          ${(post.comments || []).map(comment => `<div class="comment">${comment}</div>`).join('')}
        </div>
        <textarea placeholder="Escribe un comentario..." data-index="${index}"></textarea>
        <button class="comment-button" data-index="${index}">Comentar</button>
      </div>
    `;
    postsContainer.appendChild(postElement);
  });

  // Botones de like
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      likePost(index);
    });
  });

  // Botones de eliminar
  document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      deletePost(index);
    });
  });

  // Botones de comentar
  document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      const textarea = button.previousElementSibling;
      const comment = textarea.value;
      if (comment.trim()) {
        addComment(index, comment);
        textarea.value = '';
      }
    });
  });
}

function savePost(title, description, image) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({ title, description, image, likes: 0, comments: [] });
  localStorage.setItem('posts', JSON.stringify(posts));
}

function deletePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

function likePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].likes = (posts[index].likes || 0) + 1;
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

function addComment(index, comment) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].comments.push(comment);
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

// Subida de nueva publicación
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('imageInput');
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageUrl = event.target.result;
      savePost(title, description, imageUrl);
      loadPosts();
      postForm.reset();
    };
    reader.readAsDataURL(file);
  }
});

// Cargar al iniciar
window.onload = loadPosts;