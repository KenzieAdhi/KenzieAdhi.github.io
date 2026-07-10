const toggleButton = document.getElementById('themeToggle');
const body = document.body;

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  });
}

const projectImages = document.querySelectorAll('.project-card img');
projectImages.forEach((img) => {
  const originalSrc = img.getAttribute('src');
  const hoverSrc = img.getAttribute('data-hover-src');

  if (!hoverSrc) return;

  img.addEventListener('mouseenter', () => {
    img.setAttribute('src', hoverSrc);
  });

  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', originalSrc);
  });
});
