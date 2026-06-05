// Burger
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  function closeMobile() {
    mobileMenu.classList.remove('open');
  }

  // FAQ
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Reviews expand
  function toggleReview(id, btn) {
    const el = document.getElementById(id);
    const clamped = el.classList.toggle('clamped');
    btn.textContent = clamped ? 'Читать полностью' : 'Свернуть';
  }

  // Form submit (stub)
  function submitForm() {
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    const consent = document.getElementById('fConsent').checked;
    if (!name || !phone) { alert('Пожалуйста, заполните имя и телефон.'); return; }
    if (!consent) { alert('Пожалуйста, дайте согласие на обработку данных.'); return; }
    alert('Спасибо, ' + name + '! Я перезвоню вам в ближайшее время.');
    document.getElementById('fname').value = '';
    document.getElementById('fphone').value = '';
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav .nav-list a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });


  // Скроллер для карусели фото работ
  const strip = document.getElementById('worksStrip');

  document.querySelector('.works-prev').addEventListener('click', () => {
      strip.scrollBy({
          left: -260,
          behavior: 'smooth'
      });
  });

  document.querySelector('.works-next').addEventListener('click', () => {
      strip.scrollBy({
          left: 260,
          behavior: 'smooth'
      });
  });

  // Скроллер для карусели отзывов
  const reviewsStrip = document.getElementById('reviewsStrip');

  const reviewsPrev = document.querySelector('.reviews-prev');
  const reviewsNext = document.querySelector('.reviews-next');

  if (reviewsStrip && reviewsPrev && reviewsNext) {

      reviewsPrev.addEventListener('click', () => {
          reviewsStrip.scrollBy({
              left: -400,
              behavior: 'smooth'
          });
      });

      reviewsNext.addEventListener('click', () => {
          reviewsStrip.scrollBy({
              left: 400,
              behavior: 'smooth'
          });
      });

  }