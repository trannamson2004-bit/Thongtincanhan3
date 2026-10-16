// ===== Portfolio JavaScript =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Portfolio của Nguyễn Văn A đã load xong!');

    // --- 1. Menu mobile (hamburger) ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // Đóng menu khi click vào link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // --- 2. Hiệu ứng đếm số (stats) ---
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const animateCount = (el) => {
            const target = parseInt(el.dataset.target, 10);
            const duration = 1500;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 16);
        };

        // Chạy khi cuộn đến section stats
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => observer.observe(el));
    }

    // --- 3. Thanh kỹ năng (about page) ---
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    requestAnimationFrame(() => {
                        entry.target.style.width = width;
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // --- 4. Xử lý form liên hệ ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate đơn giản
            if (!name || !email || !message) {
                formStatus.textContent = '⚠️ Vui lòng điền đầy đủ các trường bắt buộc!';
                formStatus.className = 'form-status error';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = '⚠️ Email không hợp lệ!';
                formStatus.className = 'form-status error';
                return;
            }

            // Giả lập gửi thành công (GitHub Pages tĩnh không có backend)
            formStatus.textContent = '✅ Cảm ơn bạn! Tin nhắn đã được ghi nhận. Mình sẽ phản hồi sớm nhất.';
            formStatus.className = 'form-status success';
            contactForm.reset();

            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        });
    }

    // --- 5. Hiệu ứng hiện dần khi cuộn (fade-in) ---
    const fadeElements = document.querySelectorAll('.project-card, .timeline-item, .info-item');
    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => fadeObserver.observe(el));
    }

    // --- 6. Năm tự động ở footer ---
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, year);
    }
});
