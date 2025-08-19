const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

const logo = document.querySelector('#brand-logo');

let ticking = false;

function update() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    if (y > 30) logo.classList.add('is-scrolled');
    else logo.classList.remove('is-scrolled');
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
    }
}, { passive: true });

update();