//Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

// 1. Podemos usar o .split para dividir uma string em um array de substrings com base em um delimitador.
let texto = "Hoje é dia de aprender sobre JavaScript; estou muito feliz com o que estou aprendendo!; JavaScript é uma linguagem de programação incrível!; A cada dia que estudo JavaScript, fico mais apaixonado pela linguagem!; JavaScript é a linguagem do futuro!; Estou estudando JavaScript na Alura.";

let frases = texto.split(';');

console.log(frases);

// 2. Podemos usar o .map() com trim() para remover espaços extras no início e no final de cada frase.

let frasesFormatadas = texto.split(';').map(frase => frase.trim());

console.log(frasesFormatadas);

// Dessa forma garantimos que cada frase fique corretamente ajustada sem espaços extras.