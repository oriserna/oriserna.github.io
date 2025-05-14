const commentInput = document.querySelector('.add-comment input');
  const publishBtn = document.querySelector('.add-comment button');
  const commentsSection = document.querySelector('.comments-section');

  publishBtn.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (text !== '') {
      const commentHTML = `
        <div class="comment">
          <img src="../../../IMAGENES/usuari.png" alt="Usuari">
          <div class="comment-content">
            <span class="username">@Usuari</span>
            ${text}
          </div>
        </div>
      `;
      commentsSection.insertAdjacentHTML('beforeend', commentHTML);
      commentInput.value = '';
    }
  });