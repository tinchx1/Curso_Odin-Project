import './styles.css';
import { loadHome } from './modules/homeModule.mjs';
import { loadMenu } from './modules/menuModule.mjs';
import { loadReserva } from './modules/reservationModule.mjs';


function loadInitialPage() {
    loadHome();
}
window.addEventListener('DOMContentLoaded', loadInitialPage);

window.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content');
    
    // Función para cargar el contenido de acuerdo al botón presionado
    function loadContent(module) {
        contentContainer.innerHTML = '';
        module();
    }

    // Asignar evento al contenedor principal
    contentContainer.addEventListener('click', function(event) {
        const targetId = event.target.id;

        if (targetId === 'menuButton') {
            loadContent(loadMenu);
        } else if (targetId === 'reservaButton') {
            loadContent(loadReserva);
        } else if (targetId === 'inicioTabHome') {
            loadContent(loadHome);
        } else if (targetId === 'menuTabHome') {
            loadContent(loadMenu);
        } else if (targetId === 'reservaTabHome') {
            loadContent(loadReserva);
        }
    });
});

  