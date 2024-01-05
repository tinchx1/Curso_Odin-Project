export function loadHome() {
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
    <header>
        <nav>
            <div class="logo">
                <a href="javascript:void(0)" id="inicioTabHome">
                    <img src="images/logo.webp" alt="Logo del Restaurante GustoVivo">
                </a>
            </div>
                <ul>
                    <li><a href="javascript:void(0)" id="inicioTabHome">Inicio</a></li>
                    <li><a href="javascript:void(0)" id="menuTabHome">Menú</a></li>
                    <li><a href="javascript:void(0)" id="reservaTabHome">Reserva</a></li>
                </ul>
        </nav>
        <section class="hero">
            <h1>Restaurante GustoVivo</h1>
            <button id="reservaButton">Reserve ahora</button>
        </section>
    </header>
    <main>
        <section class="section-us">
        <h2>Sobre Nosotros</h2>
        <div class="seccion-cartas">
            <div class="carta-imagen"></div>
            <div class="carta-texto">
                <div class="texto-seccion">
                    <p>GustoVivo: donde la pasión por la comida se encuentra con la excelencia. Descubre una fusión única de sabores que cuenta la historia de nuestra dedicación a la alta cocina.</p>
                </div>
                <div class="texto-seccion">
                    <p>Únete a nosotros y celebra la vida a través del gusto. ¡Bienvenido a GustoVivo, donde cada bocado es una experiencia inolvidable!</p>
                </div>
            </div>
        </div>
    </section>

        <section class="platos-destacados">
            <h2>Platos Destacados</h2>
            <div class="bentogrid">
                <div class="bento-item medium">
                    <img src="images/platos/pexels-olga-lioncat-7245468.jpg" alt="">
                    <h4>Sushi</h4>
                </div>
                <div class="bento-item medium">
                    <img src="images/platos/pexels-daniel-reche-1556688 (1).jpg" alt="">
                    <h4>Hamburguesa</h4>
                </div>
                <div class="bento-item medium fideos">
                    <img src="images/platos/pexels-polina-tankilevitch-4518844 (1).jpg">
                    <h4>Pasta</h4>
                </div>
                <div class="bento-item large">
                    <img src="images/platos/pexels-kampus-production-6605214 (3).jpg" alt="">
                    <h4>Pizza</h4>
                </div>
                <div class="bento-item medium">
                    <img src="images/platos/pexels-hana-brannigan-3642718 (2).jpg">
                    <h4>Tacos</h4>
                </div>
                <div class="bento-item medium">
                    <img src="images/platos/pexels-roman-odintsov-4553376.jpg">
                    <h4>Picadas</h4>
                </div>
                <div class="bento-item large">
                    <img src="images/platos/pexels-ruslan-khmelevsky-11267133.jpg">
                    <h4>Carnes</h4>
                </div>
            </div>
            <button id="menuButton" class="menu-button">Ver Menú Completo</button>
        </section>
    </main>
    <footer>
    <p>&copy; 2024 tinchx1. Todos los derechos reservados.</p>
    <p>Sígueme en GitHub:</p>
    <ul>
        <li><a href="https://github.com/tinchx1">GitHub - tinchx1</a></li>
    </ul>
</footer>  `;
    document.getElementById('content').appendChild(homeDiv);
}