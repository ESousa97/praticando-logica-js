// Funções compartilhadas para a calculadora

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
