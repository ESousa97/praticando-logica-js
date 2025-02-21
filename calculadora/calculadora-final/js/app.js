// 3 - Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
// Funções para operações matemáticas
function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero';
    }
    return a / b;
}

// Função principal da calculadora
function calcular(operacao, num1, num2) {
    switch (operacao) {
        case 'adicao':
            return adicionar(num1, num2);
        case 'subtracao':
            return subtrair(num1, num2);
        case 'multiplicacao':
            return multiplicar(num1, num2);
        case 'divisao':
            return dividir(num1, num2);
        default:
            return 'Erro: Operação inválida';
    }
}

// Configura a interface após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operacao = document.getElementById('operacao').value;

        // Valida se os números são válidos
        if (isNaN(num1) || isNaN(num2)) {
            resultadoDiv.textContent = 'Por favor, insira números válidos.';
            return;
        }

        const resultado = calcular(operacao, num1, num2);
        resultadoDiv.textContent = `Resultado: ${resultado}`;
    });
});
