// 3.Desenvolva uma função que valide se uma string é vazia ou não.

/**
 * Função que valida se uma string é vazia ou não.
 * Retorna uma string indicando se a entrada é válida e se a string está vazia ou não.
 */
function validarStringVazia(texto) {
    if (typeof texto !== 'string') {
      return "Entrada inválida! Por favor, insira uma string.";
    }
    
    return texto.trim().length === 0 ? "A string está vazia." : "A string não está vazia.";
  }
  
  // Exemplo de uso:
  console.log(validarStringVazia("Olá!"));    // A string não está vazia.
  console.log(validarStringVazia("   "));     // A string está vazia.
  console.log(validarStringVazia(""));        // A string está vazia.
  console.log(validarStringVazia(123));       // Entrada inválida! Por favor, insira uma string.
  console.log(validarStringVazia(null));      // Entrada inválida! Por favor, insira uma string.
  