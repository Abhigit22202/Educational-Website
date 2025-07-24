// Carousel for courses (if more than 3, add logic to slide)
// Carousel for testimonials

document.addEventListener('DOMContentLoaded', function() {
  // Hero slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-slider-dots .dot');
  let heroIndex = 0;
  let heroInterval;

  function showHeroSlide(idx) {
    heroSlides.forEach((el, i) => {
      el.classList.remove('active', 'prev', 'next');
      if (i === idx) {
        el.classList.add('active');
      } else if (i === (idx - 1 + heroSlides.length) % heroSlides.length) {
        el.classList.add('prev');
      } else if (i === (idx + 1) % heroSlides.length) {
        el.classList.add('next');
      }
      if (heroDots[i]) heroDots[i].classList.toggle('active', i === idx);
    });
    heroIndex = idx;
  }

  function nextHeroSlide() {
    let next = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(next);
  }

  function startHeroSlider() {
    heroInterval = setInterval(nextHeroSlide, 2000); // 2 seconds
  }
  function stopHeroSlider() {
    clearInterval(heroInterval);
  }

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showHeroSlide(idx);
      stopHeroSlider();
      startHeroSlider();
    });
  });

  if (heroSlides.length > 1) {
    showHeroSlide(0); // Ensure the first slide is active on load
    startHeroSlider();
    document.querySelector('.hero-slider').addEventListener('mouseenter', stopHeroSlider);
    document.querySelector('.hero-slider').addEventListener('mouseleave', startHeroSlider);
  }

  // === Success Stories Slider (new structure) ===
  (function() {
    const slides = document.querySelectorAll('.testimonial-slider .testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-slider .testimonial-dot');
    let current = 0;
    let interval;

    function showSlide(idx) {
      slides.forEach((el, i) => {
        el.classList.remove('active', 'prev', 'next');
        if (i === idx) {
          el.classList.add('active');
        } else if (i === (idx - 1 + slides.length) % slides.length) {
          el.classList.add('prev');
        } else if (i === (idx + 1) % slides.length) {
          el.classList.add('next');
        }
        if (dots[i]) dots[i].classList.toggle('active', i === idx);
      });
      current = idx;
    }

    function nextSlide() {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }

    function startSlider() {
      interval = setInterval(nextSlide, 2000);
    }
    function stopSlider() {
      clearInterval(interval);
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        stopSlider();
        startSlider();
      });
    });

    if (slides.length > 1) {
      showSlide(0);
      startSlider();
      document.querySelector('.testimonial-slider').addEventListener('mouseenter', stopSlider);
      document.querySelector('.testimonial-slider').addEventListener('mouseleave', startSlider);
    }
  })();


  // === Courses Slider ===
  (function() {
    const slides = document.querySelectorAll('.courses-slider .courses-slide');
    const dots = document.querySelectorAll('.courses-slider-dots .dot');
    let current = 0;
    let interval;

    function showSlide(idx) {
      slides.forEach((el, i) => {
        el.classList.toggle('active', i === idx);
        if (dots[i]) dots[i].classList.toggle('active', i === idx);
      });
      current = idx;
    }

    function nextSlide() {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }

    function startSlider() {
      interval = setInterval(nextSlide, 2000);
    }
    function stopSlider() {
      clearInterval(interval);
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        stopSlider();
        startSlider();
      });
    });

    if (slides.length > 1) {
      showSlide(0);
      startSlider();
      document.querySelector('.courses-slider').addEventListener('mouseenter', stopSlider);
      document.querySelector('.courses-slider').addEventListener('mouseleave', startSlider);
    }
  })();

  // === Why Choose Slider ===
  (function() {
    const slides = document.querySelectorAll('.why-choose-slider .why-choose-slide');
    const dots = document.querySelectorAll('.why-choose-slider-dots .dot');
    let current = 0;
    let interval;

    function showSlide(idx) {
      slides.forEach((el, i) => {
        el.classList.toggle('active', i === idx);
        if (dots[i]) dots[i].classList.toggle('active', i === idx);
      });
      current = idx;
    }

    function nextSlide() {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }

    function startSlider() {
      interval = setInterval(nextSlide, 2000);
    }
    function stopSlider() {
      clearInterval(interval);
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        stopSlider();
        startSlider();
      });
    });

    if (slides.length > 1) {
      showSlide(0);
      startSlider();
      document.querySelector('.why-choose-slider').addEventListener('mouseenter', stopSlider);
      document.querySelector('.why-choose-slider').addEventListener('mouseleave', startSlider);
    }
  })();


  // Newsletter form dummy handler
  const newsletterForm = document.querySelector('.newsletter');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      input.value = '';
      alert('Thank you for subscribing!');
    });
  }
}); 