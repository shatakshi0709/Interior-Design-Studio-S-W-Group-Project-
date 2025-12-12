// Cards click event
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const page = card.getAttribute('data-page');
        if (page) window.location.href = page;
    });
});

// Navbar links click event
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default href
        const page = link.getAttribute('data-page');
        if (page) window.location.href = page;
    });
});

// Filter buttons click event
document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-page');
        if (page) window.location.href = page;
    });
});
// Video Hover Play Logic
document.querySelectorAll(".card").forEach(card => {
    const video = card.querySelector(".hover-video");

    card.addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
    });
});
