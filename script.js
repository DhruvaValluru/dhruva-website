document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-page]');
    const pages = document.querySelectorAll('.page');

    function switchPage(pageName) {
        pages.forEach(page => page.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        document.querySelectorAll(`.nav-link[data-page="${pageName}"]`).forEach(link => {
            link.classList.add('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            switchPage(page);
        });
    });
});
