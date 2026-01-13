const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    // Mostrar / ocultar menú
    mobileMenu.style.display =
        mobileMenu.style.display === 'block' ? 'none' : 'block';
});