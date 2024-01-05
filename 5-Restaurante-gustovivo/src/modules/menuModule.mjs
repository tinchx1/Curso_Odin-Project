// menuModule.js
export function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `<nav>
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

<section class="menu">
    <h2>Nuestro Menú</h2>
    <div class="menuItem">
        <h3>Sushi</h3>
        <p class="price">$15.99</p>
    </div>
    <div class="menuItem">
        <h3>Hamburguesa</h3>
        <p class="price">$10.99</p>
    </div>
    <div class="menuItem">
        <h3>Pasta</h3>
        <p class="price">$12.99</p>
    </div>
    <div class="menuItem">
        <h3>Pizza</h3>
        <p class="price">$14.99</p>
    </div>
    <div class="menuItem">
        <h3>Tacos</h3>
        <p class="price">$8.99</p>
    </div>
    <div class="menuItem">
        <h3>Picadas</h3>
        <p class="price">$18.99</p>
    </div>
    <div class="menuItem">
    <h3>Ensalada César</h3>
    <p class="price">$9.99</p>
</div>
<div class="menuItem">
    <h3>Lasaña</h3>
    <p class="price">$11.99</p>
</div>
<div class="menuItem">
    <h3>Wrap de Pollo</h3>
    <p class="price">$8.99</p>
</div>
<div class="menuItem">
    <h3>Sopa de Tomate</h3>
    <p class="price">$6.99</p>
</div>
<div class="menuItem">
    <h3>Steak a la Parrilla</h3>
    <p class="price">$16.99</p>
</div>
<div class="menuItem">
    <h3>Helado</h3>
    <p class="price">$4.99</p>
</div>
</section>

<footer>
    <p>&copy; 2024 tinchx1. Todos los derechos reservados.</p>
    <p>Sígueme en GitHub:</p>
    <ul>
        <li><a href="https://github.com/tinchx1">GitHub - tinchx1</a></li>
    </ul>
</footer>`;
    document.getElementById('content').appendChild(menuDiv);
}
