// Мобильное бургер-меню и плавная прокрутка
document.addEventListener('DOMContentLoaded', function() {
    // ===== БУРГЕР-МЕНЮ =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Закрываем меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ===== ПЛАВНАЯ ПРОКРУТКА =====
    // Перехватываем все ссылки с якорями
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Пропускаем пустые ссылки и ссылки только с "#"
            if (href === '#' || href === '') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Обновляем URL без скачка
                history.pushState(null, null, href);
            }
        });
    });
});