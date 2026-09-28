/**
 * Librería de Componentes Visuales - Notificación Toast
 */
function mostrarToast(mensaje, tipo = 'exito') {
    // Buscar o crear el contenedor en la página
    let contenedor = document.getElementById('toast-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'toast-container';
        document.body.appendChild(contenedor);
    }

    // elemento visual (la tarjeta)
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;

    // Agregar el toast al contenedor
    contenedor.appendChild(toast);

    // Animación de entrada
    setTimeout(() => {
        toast.classList.add('mostrar');
    }, 10);

    // Desaparecer y eliminar automáticamente después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('mostrar');
        setTimeout(() => {
            toast.remove();
        }, 300); // Espera a que termine la animación de salida
    }, 3000);
}