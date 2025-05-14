document.querySelectorAll('.post .post-actions .post-button').forEach(button => {
  // Només aplicar als botons de likes (no als enllaços de comentaris)
  if (button.tagName === 'BUTTON' && button.textContent.includes('Likes')) {
    button.addEventListener('click', () => {
      const match = button.textContent.match(/Likes:\s*(\d+)/);
      let count = match ? parseInt(match[1]) : 0;
      count++;
      button.textContent = `❤️ Likes: ${count}`;
    });
  }
});