// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.

// 1. Podemos usar o .split para dividir uma string em um array de substrings com base em um delimitador.
let texto = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35";

let frases = texto.split(',');

console.log(frases);

// 2. Podemos usar o .map() com trim() para remover espaços extras no início e no final de cada número.

let frasesFormatadas = texto.split(',').map(frase => frase.trim());

console.log(frasesFormatadas);

// Dessa forma garantimos que cada número fique corretamente ajustada sem espaços extras.