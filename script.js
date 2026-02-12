// Inicializa TODOS os carrosseis da página
document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('img');
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev'); // (se você adicionar depois)

  let index = 0;

  function getSlideWidth() {
    // Como cada slide ocupa 100% do carousel, o width correto é o do container
    return carousel.clientWidth;
  }

  function updateCarousel() {
    const width = getSlideWidth();
    track.style.transform = `translateX(-${index * width}px)`;
  }

  // Próximo
  nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length; // loop perfeito
    updateCarousel();
  });

  // (Opcional) Anterior - só funciona se você criar o botão prev no HTML
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });
  }

  // Garante que o cálculo não bugue quando imagens/carregamento/responsivo mudarem
  window.addEventListener('load', updateCarousel);
  window.addEventListener('resize', updateCarousel);
});


