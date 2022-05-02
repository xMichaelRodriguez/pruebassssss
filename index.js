const PI = 3.1416;

const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const radio = document.getElementById('radio').value;
  if (radio.length <= 0) return alert('Please select a shape');

  const { area, perimetro } = calcularCirculo(radio);

  const result = document.getElementById('resultado');

  result.innerHTML = `
  <p>Area = ${area}</p>
  <p>Perimetro = ${perimetro}</p>
  `;
}

function calcularCirculo(radio) {
  let radioAlCuadrado = Math.pow(radio, 2);
  let area = (PI * radioAlCuadrado).toFixed(2);
  let perimetro = (2 * PI * radio).toFixed(2);
  return {
    area,
    perimetro,
  };
}
