// Função que valida o número e retorna se ele é positivo, negativo, zero ou inválido
function validador(x) {
    // Verifica se x é do tipo 'number' e se não é NaN
    if (typeof x !== 'number' || isNaN(x)) {
      return 'não é um número válido';
    } else if (Math.sign(x) === 1) {
      return 'positivo';
    } else if (Math.sign(x) === -1) {
      return 'negativo';
    } else if (Math.sign(x) === 0) {
      return 'zero';
    } else {
      return 'não é um número válido';
    }
  }
  
  // Adiciona um listener para o envio do formulário
  document.getElementById('validadorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtém o valor digitado e converte para número
    const inputValue = document.getElementById('numero').value;
    const num = parseFloat(inputValue);
    
    // Valida o número e exibe o resultado
    const resultado = validador(num);
    document.getElementById('result').innerText = resultado;
  });
  