// js de formulario

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      // Validar campos
      if (nameInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
      }
  
      if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Por favor, ingresa tu mensaje.');
        return;
      }
  
      // Enviar formulario (aquí iría la lógica para enviar el formulario)
      alert('¡Formulario enviado exitosamente!');
      form.reset();
    });
  });