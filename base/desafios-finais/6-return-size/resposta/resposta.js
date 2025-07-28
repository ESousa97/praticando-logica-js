// 6.Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

/**
 * Função que retorna o tamanho de um array.
 * Se o valor passado não for um array, retorna uma mensagem de erro.
 */
function tamanhoArray(array) {
    if (!Array.isArray(array)) {
      return "Erro: O parâmetro deve ser um array.";
    }
    
    return array.length;
  }
  
  // Exemplo de uso:
  console.log(tamanhoArray([1, 2, 3, 4, 5])); // 5
  console.log(tamanhoArray([])); // 0
  console.log(tamanhoArray("Não é um array")); // Erro: O parâmetro deve ser um array.
  console.log(tamanhoArray({ a: 1, b: 2 })); // Erro: O parâmetro deve ser um array.
  