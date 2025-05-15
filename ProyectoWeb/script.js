// Asegúrate de que tu navbar tenga un id o clase, por ejemplo: <nav id="navbar"></nav>
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const fondoprron = document.getElementById('fondoprron');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.background = 'rgb(235, 229, 204)'; // Opaco
        navbar.style.borderBottom = '2px solid #a9b57c'; // Añadir borde inferior
        navbar.style.transition = 'background 0.3s';
        fondoprron.style.boxShadow = ''; // Quitar sombra si existe

    } else {
        navbar.style.background = 'transparent'; // Transparente
        navbar.style.transition = 'background 0.3s';
        navbar.style.borderBottom = '0px solid rgba(169, 181, 124, 0)';
        fondoprron.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Añadir sombra
    }
});
