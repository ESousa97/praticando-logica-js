// 5.Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

/**
 * Função que calcula a média de dois números.
 * Se algum dos números não for válido, interrompe a execução e retorna uma mensagem de erro.
 */
function calcularMedia(numero1, numero2) {
    if (typeof numero1 !== 'number' || isNaN(numero1) || typeof numero2 !== 'number' || isNaN(numero2)) {
      throw new Error("Erro: Ambos os valores devem ser números válidos.");
    }
    
    return (numero1 + numero2) / 2;
  }
  
  // Exemplo de uso:
  try {
    console.log(calcularMedia(10, 20)); // 15
    console.log(calcularMedia(5, "abc")); // Erro: Ambos os valores devem ser números válidos.
  } catch (error) {
    console.error(error.message);
  }
  