document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const page = card.getAttribute('data-page');
        if (page) window.location.href = page;
    });
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const page = link.getAttribute('data-page');
        if (page) window.location.href = page;
    });
});
document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-page');
        if (page) window.location.href = page;
    });
});