document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'p-3');
    navbar.id = 'menu';

    const container = document.createElement('div');
    container.classList.add('container', 'd-flex', 'justify-content-between'); // Añadir clases para alinear elementos

    // Agregar el logo y el texto "VIAJA GO" a la izquierda del navbar
    const brandContainer = document.createElement('div'); // Nuevo div para el logo y el texto
    brandContainer.classList.add('brand-container', 'd-flex', 'align-items-center'); // Añadir clases para alinear elementos

    const logoImage = document.createElement('img');
    logoImage.src = 'fotos/logo_2.png'; // Ruta a la imagen de tu logo
    logoImage.classList.add('logo-img');

    const brandText = document.createElement('span');
    brandText.classList.add('fs-5', 'text-white', 'fw-bold');
    brandText.textContent = 'VIAJA GO';

    brandContainer.appendChild(logoImage);
    brandContainer.appendChild(brandText);

    const brand = document.createElement('a');
    brand.classList.add('navbar-brand');
    brand.appendChild(brandContainer);

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');

    const menuItems = [
        { text: 'Inicio', href: '#' },
        { text: 'Paquetes de Viaje', href: '#intro' },
        { text: 'Viaja por Chile', href: '#equipo' },
        { text: 'Latinoamérica', href: '#equipo' },
        { text: 'Blog', href: '#servicios-fila-1' },
        { text: 'Nosotros', href: '#equipo' }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Agregar el icono del carrito de compra a la derecha del navbar
    const cartIcon = document.createElement('i');
    cartIcon.classList.add('fas', 'fa-shopping-cart'); // Se asume que estás usando FontAwesome para los íconos
    const cartLink = document.createElement('a');
    cartLink.classList.add('nav-link');
    cartLink.href = 'carrito.html';
    cartLink.appendChild(cartIcon);

    // Alineación de elementos
    container.appendChild(brand);
    container.appendChild(ul);
    container.appendChild(cartLink);

    navbar.appendChild(container);
   
    document.body.prepend(navbar);
});
