// reservaModule.js
export function loadReserva() {
    const reservaDiv = document.createElement('div');
    // Agregar contenido y estilos para la página de reserva
    reservaDiv.innerHTML = `
<nav>
    <div class="logo">
        <a href="javascript:void(0)" id="inicioTabHome">
            <img src="images/logo.webp" alt="Logo del Restaurante GustoVivo">
        </a>
    </div>
    <ul>
        <!-- Agrega estos enlaces con los IDs correspondientes -->
        <li><a href="javascript:void(0)" id="inicioTabHome">Inicio</a></li>
        <li><a href="javascript:void(0)" id="menuTabHome">Menú</a></li>
        <li><a href="javascript:void(0)" id="reservaTabHome">Reserva</a></li>
    </ul>
</nav> 
<section class="reservas">
<h2>Reservas</h2>
<form id="reservaForm" onsubmit="return false;" class="styled-form">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="fecha">Fecha:</label>
  <input type="date" id="fecha" name="fecha" required>

  <label for="hora">Hora:</label>
  <input type="time" id="hora" name="hora" required>

  <button type="button">Reservar</button>
</form>
<footer>
    <p>&copy; 2024 tinchx1. Todos los derechos reservados.</p>
    <p>Sígueme en GitHub:</p>
    <ul>
        <li><a href="https://github.com/tinchx1">GitHub - tinchx1</a></li>
    </ul>
</footer>`;
    document.getElementById('content').appendChild(reservaDiv);
}
