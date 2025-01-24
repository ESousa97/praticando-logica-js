// 4. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados. 

function ordenarTresNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

// Testando a função
let resultado = ordenarTresNumeros(10, 5, 3);
console.log(resultado); // Saída esperada: [3, 5, 10]
