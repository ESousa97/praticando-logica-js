// 1. Crie uma função que valide se um número é positivo, negativo ou zero.

/**
 * Função que valida se um número é positivo, negativo ou zero.
 * Retorna uma string indicando o resultado.
 */
function validarNumero(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
      return "Valor inválido! Por favor, insira um número.";
    }
    
    if (numero > 0) {
      return "O número é positivo.";
    } else if (numero < 0) {
      return "O número é negativo.";
    } else {
      return "O número é zero.";
    }
  }
  
  // Exemplo de uso:
  console.log(validarNumero(10));  // O número é positivo.
  console.log(validarNumero(-5));  // O número é negativo.
  console.log(validarNumero(0));   // O número é zero.
  console.log(validarNumero("abc")); // Valor inválido! Por favor, insira um número.
  