function obtenerValores() {
    const a = parseFloat(document.getElementById('numeroUno').value);
    const b = parseFloat(document.getElementById('numeroDos').value);
    
    return {a, b};
}

function actualizarResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = resultado;
}

function sumar() {
    const a = parseFloat(document.getElementById('sumaA').value);
    const b = parseFloat(document.getElementById('sumaB').value);
    const sumaResultado = a + b;
    
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = sumaResultado;
}

function restar() {
    const a = parseFloat(document.getElementById('sumaA').value);
    const b = parseFloat(document.getElementById('sumaB').value);
    const restaResultado = a - b;
    
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = restaResultado;
}

function multiplicar() {
    const a = parseFloat(document.getElementById('sumaA').value);
    const b = parseFloat(document.getElementById('sumaB').value);
    const multiplicarResultado = a * b;
    
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = multiplicarResultado;
}

function dividir() {
    const a = parseFloat(document.getElementById('sumaA').value);
    const b = parseFloat(document.getElementById('sumaB').value);
    if (b !== 0) {
        const dividirResultado = a / b;
        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.textContent = dividirResultado;
    } else {
        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.textContent = 'Error: División por cero';
    }
}

// Asignar las funciones a los botones
document.getElementById('sumar').onclick = sumar;
document.getElementById('restar').onclick = restar;
document.getElementById('multiplicar').onclick = multiplicar;
document.getElementById('dividir').onclick = dividir;
document.getElementById('limpiar').onclick = function() {
    document.getElementById('sumaA').value = '';
    document.getElementById('sumaB').value = '';
    document.getElementById('resultado').textContent = '';
};

function limpiar(){
    const resultadoElementoLimpiar = document.getElementById('resultado');
    resultadoElementoLimpiar.textContent = "";
    document.getElementById('numeroUno').value = "";
    document.getElementById('numeroDos').value = "";
}