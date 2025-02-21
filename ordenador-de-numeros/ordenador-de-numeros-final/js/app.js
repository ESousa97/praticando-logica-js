// Função que recebe três números e retorna um array com eles em ordem crescente
function ordenarTresNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formNumeros');
    const resultadoDiv = document.getElementById('resultado');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Recupera os valores dos inputs e os converte para números
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const num3 = parseFloat(document.getElementById('num3').value);
  
      // Validação simples
      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultadoDiv.textContent = "Por favor, insira três números válidos.";
        return;
      }
  
      // Ordena os números
      const numerosOrdenados = ordenarTresNumeros(num1, num2, num3);
      
      // Exibe o resultado na tela
      resultadoDiv.innerHTML = `<p>Números ordenados: <strong>${numerosOrdenados.join(', ')}</strong></p>`;
  
      // Também exibe o resultado no console
      console.log("Números ordenados:", numerosOrdenados);
    });
  });
  