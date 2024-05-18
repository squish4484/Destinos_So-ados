    
/*=========================NAVBAR================================*/
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'p-3');
  navbar.id = 'menu';

  const container = document.createElement('div');
  container.classList.add('container');

  // Crear el enlace al carrito de compra
  const cartLink = document.createElement('a');
  cartLink.href = 'carrito.html'; // Enlace a la página del carrito de compra
  cartLink.classList.add('cart-button');

  // Agregar el botón del carrito de compra al enlace
  const cartButton = document.createElement('button');
  cartButton.innerHTML = '<i class="fas fa-shopping-cart"></i>'; // Se asume que estás usando FontAwesome para los íconos
  cartButton.classList.add('btn', 'btn-outline-dark');

  // Agregar el botón del carrito de compra al enlace
  cartLink.appendChild(cartButton);

  // Agregar la imagen del logo a la izquierda
  const logoImage = document.createElement('img');
  logoImage.src = 'fotos/logo_2.png'; // Ruta a la imagen de tu logo
  logoImage.classList.add('logo-img');

  const brand = document.createElement('a');
  brand.classList.add('navbar-brand');

  // Incluir el logo, el texto "VIAJA GO" y el botón del carrito de compra
  brand.innerHTML = `
      ${logoImage.outerHTML}
      <span class="fs-5 text-white fw-bold">VIAJA GO</span>
  `;
  brand.appendChild(cartLink);

  const toggleButton = document.createElement('button');
  toggleButton.classList.add('navbar-toggler');
  toggleButton.type = 'button';
  toggleButton.dataset.bsToggle = 'collapse';
  toggleButton.dataset.bsTarget = '#navbarSupportedContent';
  toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
  toggleButton.setAttribute('aria-expanded', 'false');
  toggleButton.setAttribute('aria-label', 'Toggle navigation');
  toggleButton.innerHTML = `<span class="navbar-toggler-icon"></span>`;

  const collapseDiv = document.createElement('div');
  collapseDiv.classList.add('collapse', 'navbar-collapse');
  collapseDiv.id = 'navbarSupportedContent';

  const ul = document.createElement('ul');
  ul.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');

  const menuItems = [
      { text: 'Inicio', href: 'Index.html' },
      { text: 'Paquetes de Viaje', href: '#intro' },
      { text: 'Viaja por Chile', href: '#' },
      { text: 'Latinoamérica', href: 'latinoamerica.html' },
      { text: 'Blog', href: '#' },
      { text: 'Nosotros', href: 'nosotros.html' }
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

  collapseDiv.appendChild(ul);
  container.appendChild(brand);
  container.appendChild(toggleButton);
  container.appendChild(collapseDiv);
  navbar.appendChild(container);

  document.body.prepend(navbar);
});


/*===========================TYPEWRITER==================================*/

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('¡Tu Socio en la Aventura!')
  .pauseFor(200)
  .deleteChars(10)
  .start();

/*===========================FOOTER==================================*/

const footer = document.querySelector('.footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');

const column1 = document.createElement('div');
column1.classList.add('column');
column1.innerHTML = `
<h3>Información de contacto:</h3>
<p>Teléfono: +56 9 1234 5678</p>
<p>Correo electrónico: info@viajago.com</p>
`;

const column2 = document.createElement('div');
column2.classList.add('column');
column2.innerHTML = `
<h3>Información Importante:</h3>
<ul>
  <li><a href="formulario.html">Contacto</a></li>
  <li><a href="#">Preguntas frecuentes</a></li>
  <li><a href="#">Términos y condiciones</a></li>
</ul>
`;

const column3 = document.createElement('div');
column3.classList.add('column');
column3.innerHTML = `
<h3>¡Suscríbete a nuestro boletín!</h3>
<p>Recibe las últimas noticias y promociones directamente en tu bandeja de entrada.</p>
<form>
  <input type="email" placeholder="Correo electrónico" required>
  <button type="submit">Suscribirse</button>
</form>
`;


footer.appendChild(footerContainer);
footerContainer.appendChild(column1);
footerContainer.appendChild(column2);
footerContainer.appendChild(column3);




/*===========================MODAL==================================*/

// ObteneMOS el modal
var modal = document.getElementById('MIMODAL');

// Obtenemos la imagen y la colocamos dentro del modal
var images = document.querySelectorAll('.gallery-img');
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

images.forEach(function(img) {
  img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
});

// Obtenemos el elemento <span> que cerrara el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace click en <span> (x), cerramos el modal
span.onclick = function() {
  modal.style.display = "none";
}



