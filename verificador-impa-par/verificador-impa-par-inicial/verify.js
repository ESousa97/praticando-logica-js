// 4 - Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
var n = parseInt(prompt("Digite um número inteiro:")); // Converte a entrada para número inteiro

if (isNaN(n)) { // Verifica se a conversão falhou (usuário digitou algo inválido)
  alert("Por favor, insira um número válido.");
} else {
  var total = n / 2; // Continua a divisão corretamente
  
  if (n % 2 === 0) {
    alert("O número " + n + " é par.");
  } else {
    alert("O número " + n + " é ímpar.");
  }

  alert("A metade do número é: " + total);
}

// teste no console do navegador.