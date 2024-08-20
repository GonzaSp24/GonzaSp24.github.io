// archivo: js/garantias.js
function toggleInfo(button) {
    // Encuentra el contenedor de información adicional más cercano
    const additionalInfo = button.previousElementSibling;
    
    // Alterna la clase d-none para mostrar u ocultar el contenido
    if (additionalInfo.classList.contains('d-none')) {
        additionalInfo.classList.remove('d-none');
        button.textContent = 'Ver Menos';  // Cambia el texto del botón
    } else {
        additionalInfo.classList.add('d-none');
        button.textContent = 'Ver Más';  // Cambia el texto del botón
    }
}
