// Lucide icons
lucide.createIcons();

// Animation simple au scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
