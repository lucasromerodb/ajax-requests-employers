const firstButton = document.getElementById('boton1');
const secondButton = document.getElementById('boton2');

firstButton.addEventListener('click', function() {
  const req = new XMLHttpRequest();
  req.open('GET', 'empleado.json', true);
  req.onload = function() {
    if (this.status === 200) {
      const employer = JSON.parse(this.responseText);
      const htmlTemplate = `
        <u>
          <li>ID: ${employer.id}</li>
          <li>Nombre: ${employer.nombre}</li>
          <li>Empresa: ${employer.empresa}</li>
          <li>Actividades: ${employer.trabajo}</li>
        </u>
      `
      document.getElementById('empleado').innerHTML = htmlTemplate;
    }
  }
  req.send();
});

secondButton.addEventListener('click', function() {
  const req = new XMLHttpRequest();
  req.open('GET', 'empleados.json', true);
  req.onload = function() {
    if (this.status === 200) {
      const employers = JSON.parse(this.responseText);
      console.log(employers);

      let htmlTemplate = '';

      employers.forEach(function(employer, index) {
        htmlTemplate += `
          <u>
            <li>ID: ${employer.id}</li>
            <li>Nombre: ${employer.nombre}</li>
            <li>Empresa: ${employer.empresa}</li>
            <li>Actividades: ${employer.trabajo}</li>
          </u>
        `
      })
      document.getElementById('empleados').innerHTML = htmlTemplate;
    }
  }
  req.send();
});
