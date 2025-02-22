// 2.Implemente uma função que verifique se uma pessoa é maior de idade.

/**
 * Função que verifica se uma pessoa é maior de idade.
 * Retorna uma string indicando se a idade é válida e se a pessoa é maior de idade ou não.
 */
function verificarMaiorIdade(idade) {
    if (typeof idade !== 'number' || isNaN(idade) || idade < 0) {
      return "Idade inválida! Por favor, insira uma idade válida.";
    }
    
    return idade >= 18 ? "A pessoa é maior de idade." : "A pessoa é menor de idade.";
  }
  
  // Exemplo de uso:
  console.log(verificarMaiorIdade(20));  // A pessoa é maior de idade.
  console.log(verificarMaiorIdade(15));  // A pessoa é menor de idade.
  console.log(verificarMaiorIdade(-5));  // Idade inválida! Por favor, insira uma idade válida.
  console.log(verificarMaiorIdade("abc")); // Idade inválida! Por favor, insira uma idade válida.
  