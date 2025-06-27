const marcarTodo = document.querySelector('#marcar-todo');
const numeroNotificaciones = document.querySelector('#numero-notificaciones');
const publicaciones = document.querySelectorAll('.publicacion');

publicaciones.forEach(publicacion => {
    publicacion.addEventListener('click', () => {
        publicacion.querySelector('.no-leido').classList.remove('no-leido');
        actualizarnotificaciones()
    });
});

marcarTodo.addEventListener('click', () => {
    const noLeidos = document.querySelectorAll('.no-leido');
    
    noLeidos.forEach(noLeido => {
        noLeido.classList.remove('no-leido');
    });
    actualizarnotificaciones()
});

const actualizarnotificaciones = () => {
 // Para verificar cuantos no leidos hay luego de hacer click en el boton marcar todo hacemos lo siguiente //
    const noLeidosActuales = document.querySelectorAll('.no-leido');
    numeroNotificaciones.innerText = noLeidosActuales.length;
};