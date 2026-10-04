document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.setAttribute('name', 'sunny-outline');
    } else {
        document.body.classList.remove('dark-mode');
        if (themeIcon) themeIcon.setAttribute('name', 'moon-outline');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                themeIcon.setAttribute('name', 'sunny-outline');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.setAttribute('name', 'moon-outline');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Auto date //
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }

    // Service Form //
    const serviceForm = document.getElementById('form-container');
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const qty = document.getElementById('qty').value;
            const item = document.getElementById('itemname').value;
            const errorCondition = document.getElementById('error-type').value;

            if (!qty || !item || !errorCondition) {
                alert('Please fill in all the required information.');
                return;
            }

            alert(`The service request has been successfully submitted.\nItem: ${item}\nQty: ${qty}`);
            serviceForm.reset();
            if (dateInput) {
                dateInput.value = new Date().toISOString().split('T')[0];
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('c-name').value;
            alert(`Thank! ${name}! We have received your message. We will get back to you shortly.`);
            contactForm.reset();
        });
    }
});

let SlideImage = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));

    if (index >= slides.length) {
        SlideImage = 0;
    } else if (index < 0) {
        SlideImage = slides.length - 1;
    } else {
        SlideImage = index;
    }

    slides[SlideImage].classList.add('active');
}

function moveSlide(step) {
    showSlide(SlideImage + step);
}