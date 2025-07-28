// 11.Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

/**
 * Função que recebe um array de números e retorna a soma dos pares e o produto dos ímpares.
 */
function calcularSomaEPProduto(array) {
    if (!Array.isArray(array) || array.some(num => typeof num !== "number" || isNaN(num))) {
      return "Erro: O parâmetro deve ser um array contendo apenas números.";
    }
  
    let somaPares = 0;
    let produtoImpares = 1;
    let temImpar = false;
  
    array.forEach(num => {
      if (num % 2 === 0) {
        somaPares += num;
      } else {
        produtoImpares *= num;
        temImpar = true;
      }
    });
  
    // Se não houver números ímpares, o produto deve ser considerado 0 (em vez de 1).
    return {
      somaPares: somaPares,
      produtoImpares: temImpar ? produtoImpares : 0
    };
  }
  
  // Exemplo de uso:
  console.log(calcularSomaEPProduto([1, 2, 3, 4, 5, 6])); // { somaPares: 12, produtoImpares: 15 }
  console.log(calcularSomaEPProduto([2, 4, 6, 8]));       // { somaPares: 20, produtoImpares: 0 }
  console.log(calcularSomaEPProduto([1, 3, 5]));          // { somaPares: 0, produtoImpares: 15 }
  console.log(calcularSomaEPProduto("Não é um array"));   // Erro
  console.log(calcularSomaEPProduto([1, "a", 3]));        // Erro
  