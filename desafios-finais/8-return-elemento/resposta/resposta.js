// 8.Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

/**
 * Função que verifica se um elemento está presente em um array.
 * Retorna true se o elemento estiver presente e false caso contrário.
 */
function verificarElementoNoArray(array, elemento) {
    if (!Array.isArray(array)) {
      return "Erro: O primeiro parâmetro deve ser um array.";
    }
    
    return array.includes(elemento);
  }
  
  // Exemplo de uso:
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log(verificarElementoNoArray(numeros, 5));  // true
  console.log(verificarElementoNoArray(numeros, 15)); // false
  console.log(verificarElementoNoArray("Não é um array", 5)); // Erro: O primeiro parâmetro deve ser um array.
  