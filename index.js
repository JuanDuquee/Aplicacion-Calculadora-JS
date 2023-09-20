//Numeros que operaran
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');

//SUMA
const botonSuma = document.getElementById('suma');
botonSuma.addEventListener('click', () => {
    const resultado = parseInt(numero1.value) + parseInt(numero2.value);
    document.getElementById('resultado').value = resultado;
    const imagen = document.getElementById('imagen');
    imagen.hidden = false;
    imagen.src = '/img/pizarron.png';
});

//RESTA
const botonResta = document.getElementById('resta');
botonResta.addEventListener('click', () => {
    const resultado = parseInt(numero1.value) - parseInt(numero2.value);
    document.getElementById('resultado').value = resultado;
    const imagen = document.getElementById('imagen');
    imagen.hidden = false;
    imagen.src = '/img/resta.png';
});

//PRODUCTO
const botonProducto = document.getElementById('producto');
botonProducto.addEventListener('click', () => {
    const resultado = parseInt(numero1.value) * parseInt(numero2.value);
    document.getElementById('resultado').value = resultado;
    const imagen = document.getElementById('imagen');
    imagen.hidden = false;
    imagen.src = '/img/multiplicacion.png';
});

//DIVIDIR
const botonDividir= document.getElementById('dividir');
botonDividir.addEventListener('click', () => {
    const resultado = parseInt(numero1.value) / parseInt(numero2.value);
    document.getElementById('resultado').value = resultado;
    const imagen = document.getElementById('imagen');
    imagen.hidden = false;
    imagen.src = '/img/division.png';
});