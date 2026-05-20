/**
 * HeroSlideshow - покачивающееся слайд-шоу для hero секции
 * Автоматическое переключение слайдов с плавным переходом
 */
class HeroSlideshow {
  constructor() {
    this.container = document.querySelector('.slideshow-container');
    if (!this.container) return;

    this.slides = this.container.querySelectorAll('.slideshow-slide');
    this.prevBtn = this.container.querySelector('.slideshow-prev');
    this.nextBtn = this.container.querySelector('.slideshow-next');
    this.indicators = this.container.querySelectorAll('.slideshow-indicator');

    this.currentSlide = 0;
    this.slideInterval = 4000;
    this.intervalId = null;

    this.init();
  }

  init() {
    if (this.slides.length <= 1) return;
    this.startAutoPlay();
    this.attachEvents();
  }

  attachEvents() {
    // Кнопки навигации
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.pause();
        this.prevSlide();
        this.startAutoPlay();
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.pause();
        this.nextSlide();
        this.startAutoPlay();
      });
    }

    // Индикаторы (точки)
    if (this.indicators) {
      this.indicators.forEach((ind, idx) => {
        ind.addEventListener('click', () => {
          this.pause();
          this.goToSlide(idx);
          this.startAutoPlay();
        });
      });
    }

    // Пауза при наведении
    this.container.addEventListener('mouseenter', () => this.pause());
    this.container.addEventListener('mouseleave', () => this.resume());
  }

  startAutoPlay() {
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextSlide(), this.slideInterval);
  }

  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resume() {
    if (!this.intervalId) this.startAutoPlay();
  }

  prevSlide() {
    let newIndex = this.currentSlide - 1;
    if (newIndex < 0) newIndex = this.slides.length - 1;
    this.goToSlide(newIndex);
  }

  nextSlide() {
    let newIndex = this.currentSlide + 1;
    if (newIndex >= this.slides.length) newIndex = 0;
    this.goToSlide(newIndex);
  }

  goToSlide(index) {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add('active');
    this.updateIndicators();
  }

  updateIndicators() {
    if (this.indicators) {
      this.indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === this.currentSlide);
      });
    }
  }

  destroy() {
    this.pause();
    this.container = null;
    this.slides = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.indicators = null;
  }
}

// Инициализация
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new HeroSlideshow());
} else {
  new HeroSlideshow();
}

// Инициализация после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeroSlideshow();
  });
} else {
  new HeroSlideshow();
}
