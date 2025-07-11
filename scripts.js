// Инициализация AOS анимаций
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Проверка онлайн статуса сервера
  if (document.getElementById('online')) {
    fetch("https://api.mcstatus.io/v2/status/java/vip.play.kz")
      .then(res => res.json())
      .then(data => {
        document.getElementById('online').innerText = data.players.online + ' игроков';
      })
      .catch(() => {
        document.getElementById('online').innerText = 'сервер недоступен';
      });
  }
});

// Плавная прокрутка для внутренних ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});
// Подсветка активной ссылки
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
// Конфиг частиц
function initParticles() {
  const container = document.getElementById('kinetikParticles');
  const particleCount = 50;
  const colors = ['#1dbd45', '#00ffaa', '#00ffff'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Рандомные параметры
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 20;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${posX}%;
      top: ${posY}%;
      animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;

    container.appendChild(particle);
  }
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', initParticles);
// Инициализация AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Анимация чисел статистики
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  
  statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-count');
    const suffix = stat.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      stat.textContent = Math.floor(current) + suffix;
    }, 16);
  });
}

// Анимация при появлении статистики
const statsSection = document.querySelector('.hero');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumbers();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  observer.observe(statsSection);
}

// Аккордеон FAQ
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = question.querySelector('i');
  
  question.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight;
    
    // Закрываем все ответы
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.maxHeight = null;
      ans.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
      ans.previousElementSibling.classList.remove('active');
    });
    
    // Открываем текущий, если был закрыт
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.classList.add('fa-chevron-up');
      question.classList.add('active');
    }
  });
});

// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Функция для проверки видимости элемента
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Анимация частиц для герой-секции
function initParticles() {
  const container = document.createElement('div');
  container.className = 'particles-container';
  document.querySelector('.hero').appendChild(container);
  
  const particleCount = 30;
  const colors = ['#1dbd45', '#00ffaa', '#00ffff'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 15 + Math.random() * 20;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${posX}%;
      top: ${posY}%;
      animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
      opacity: ${Math.random() * 0.5 + 0.1};
      box-shadow: 0 0 20px ${color};
    `;
    
    container.appendChild(particle);
  }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  
  // Подсветка активного пункта меню
 const currentTheme = localStorage.getItem('theme') || 'dark'; // ОК
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Фиксация хедера при скролле
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
});
// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
  document.querySelector('.menu-toggle').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Active link highlighting
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
function updateIcon(theme) {
  icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  icon.style.transform = 'rotate(360deg)';
  setTimeout(() => (icon.style.transform = 'rotate(0deg)'), 300);
}

