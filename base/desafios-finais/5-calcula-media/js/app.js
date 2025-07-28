// Função que recebe dois números como parâmetros e retorna a média
// Interrompe a execução lançando um erro se algum dos números for inválido
function calculaMedia(numero1, numero2) {
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Um dos valores é inválido!");
    }
    return (numero1 + numero2) / 2;
  }
  
  // Adiciona um listener para o envio do formulário
  document.getElementById('mediaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtém os valores dos inputs e converte para número
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultElement = document.getElementById('result');
    
    try {
      // Calcula a média usando a função calculaMedia
      const media = calculaMedia(num1, num2);
      resultElement.innerText = "A média é: " + media;
    } catch (error) {
      // Em caso de erro, exibe a mensagem de erro no elemento de resultado
      resultElement.innerText = error.message;
    }
  });
  