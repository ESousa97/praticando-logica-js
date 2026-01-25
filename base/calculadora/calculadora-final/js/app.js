// As funções adicionar, subtrair, multiplicar, dividir e calcular estão em ../../shared.js

// Configura a interface após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operacao = document.getElementById('operacao').value;

        if (isNaN(num1) || isNaN(num2)) {
            resultadoDiv.textContent = 'Por favor, insira números válidos.';
            return;
        }

        const resultado = calcular(operacao, num1, num2);
        resultadoDiv.textContent = \Resultado: \\;
    });
});
