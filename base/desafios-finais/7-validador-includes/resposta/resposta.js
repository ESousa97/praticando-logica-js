// 7.Crie um array e utilize a função includes para verificar se um elemento específico está presente

/**
 * Função que verifica se um elemento está presente em um array usando includes.
 * Retorna true se o elemento estiver presente, e false caso contrário.
 */
function verificarElemento(array, elemento) {
    if (!Array.isArray(array)) {
      return "Erro: O primeiro parâmetro deve ser um array.";
    }
    
    return array.includes(elemento);
  }
  
  // Exemplo de uso:
  const frutas = ["maçã", "banana", "uva", "laranja"];
  
  console.log(verificarElemento(frutas, "banana")); // true
  console.log(verificarElemento(frutas, "melancia")); // false
  console.log(verificarElemento("Não é um array", "banana")); // Erro: O primeiro parâmetro deve ser um array.
  