document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // حفظ الوضع الحالي في localStorage
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // استعادة الوضع من localStorage عند تحميل الصفحة
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
