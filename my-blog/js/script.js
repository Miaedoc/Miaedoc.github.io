document.addEventListener('DOMContentLoaded', () => {
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 轮播功能
  const track = document.querySelector('.carousel-track');
  if (track) {
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentSlideIndex = 0;

    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlidePosition();
    });
  }
});
