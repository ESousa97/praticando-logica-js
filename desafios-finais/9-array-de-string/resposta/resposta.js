// 9.Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

/**
 * Função que verifica se uma string está presente em um array de strings.
 * Retorna true se a string estiver presente e false caso contrário.
 */
function verificarStringNoArray(array, stringProcurada) {
    if (!Array.isArray(array) || array.some(item => typeof item !== "string")) {
      return "Erro: O primeiro parâmetro deve ser um array de strings.";
    }
    
    return array.includes(stringProcurada);
  }
  
  // Exemplo de uso:
  const palavras = ["maçã", "banana", "uva", "laranja"];
  
  console.log(verificarStringNoArray(palavras, "banana")); // true
  console.log(verificarStringNoArray(palavras, "melancia")); // false
  console.log(verificarStringNoArray(["maçã", 10, "uva"], "uva")); // Erro: O primeiro parâmetro deve ser um array de strings.
  console.log(verificarStringNoArray("Não é um array", "banana")); // Erro: O primeiro parâmetro deve ser um array de strings.
  